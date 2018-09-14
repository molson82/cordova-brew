package org.sitetech.com;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.List;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;

public class FirestoreDB {

    private Boolean hasBeenInitialized;

    public FirestoreDB() {
        this.hasBeenInitialized = false;
    }

    public Firestore connectToDB() throws Exception {
        InputStream serviceAccount = new FileInputStream("src/main/resources/brew.json");
        GoogleCredentials credentials = GoogleCredentials.fromStream(serviceAccount);
        FirebaseOptions options = new FirebaseOptions.Builder().setCredentials(credentials).build();
        hasBeenInitialized = true;

        FirebaseApp firebaseApp = null;
        List<FirebaseApp> firebaseApps = FirebaseApp.getApps();
        if (firebaseApps != null && !firebaseApps.isEmpty()) {
            for (FirebaseApp app : firebaseApps) {
                if (app.getName().equals(FirebaseApp.DEFAULT_APP_NAME)) {
                    firebaseApp = app;
                }
                Firestore db = FirestoreClient.getFirestore();
                return db;
            }
        } else {
            firebaseApp = FirebaseApp.initializeApp(options);
            Firestore db = FirestoreClient.getFirestore();
            return db;
        }
        return null;
    }

    public Boolean getHasBeenInitialized() {
        return hasBeenInitialized;
    }
}