package org.sitetech.com;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

public class BrewResponse {

    private String serviceName;
    private String date;
    private List<Object> result;

    public BrewResponse(List<Object> result, String serviceName, Date date) {
        this.result = result;
        this.serviceName = serviceName;
        
        DateFormat formatter = new SimpleDateFormat("dd MMM yyyy HH:mm:ss z");
        formatter.setTimeZone(TimeZone.getTimeZone("EST"));
        this.date = formatter.format(date);
    }

	// Getters
    public String getServiceName() {
        return this.serviceName;
    }

    public String getDate() {
        return this.date;
    }

    public List<Object> getResult() {
        return this.result;
    }

    // Setters
    public void setServiceName(String data) {
        this.serviceName = data;
    }

    public void setDate(String data) {
        this.date = data;
    }

    public void setResult(List<Object> data) {
        this.result = data;
    }

}