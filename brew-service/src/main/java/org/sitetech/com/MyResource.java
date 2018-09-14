package org.sitetech.com;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.Query.Direction;

import org.sitetech.com.BrewResponse;
import org.sitetech.com.dto.Weeks;

// java -jar target/dependency/webapp-runner.jar target/*.war

@Path("brew")
public class MyResource {

    private Firestore db;

    public MyResource() throws Exception {
        // System.out.println("in resource");
        FirestoreDB database = new FirestoreDB();
        this.db = database.connectToDB();
    }

    @GET
    @Path("/weekdata")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getDailyBlog() {

        // asynchronously retrieve multiple documents
        ApiFuture<QuerySnapshot> future = null;
        future = db.collection("shifts").orderBy("dateCreated", Direction.DESCENDING).limit(20).get();

        // future.get() blocks on response
        List<QueryDocumentSnapshot> documents = null;
        try {
            documents = future.get().getDocuments();
        } catch (Exception e) {
            e.printStackTrace();
        }

        List<Object> result = new ArrayList<Object>();
        for (QueryDocumentSnapshot document : documents) {
            Weeks entry = document.toObject(Weeks.class);
            System.out.println(entry.toString());
            result.add(entry);
        }
        return Response.ok(new GenericEntity<BrewResponse>(new BrewResponse(result, "Brew-Service-GET", new Date())) {
        }).header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
                .build();
    }

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getIt() {
        return "Got it!";
    }
}
