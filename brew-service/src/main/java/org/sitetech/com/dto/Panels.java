package org.sitetech.com.dto;

import java.util.Date;

public class Panels {

    private Date dateCreated;
    private String day;
    private String dayOfWeek;
    private String month;
    private Integer totalCents;
    private Integer totalDollars;
    private Integer totalHours;
    private Integer totalMins;

    // Getters
    public Date getDateCreated() {
        return dateCreated;
    }

    public String getDay() {
        return day;
    }

    public String getDayOfWeek() {
        return dayOfWeek;
    }

    public String getMonth() {
        return month;
    }

    public Integer getTotalCents() {
        return totalCents;
    }

    public Integer getTotalDollars() {
        return totalDollars;
    }

    public Integer getTotalHours() {
        return totalHours;
    }

    public Integer getTotalMins() {
        return totalMins;
    }

    // Setters
    public void setDateCreated(Date data) {
        this.dateCreated = data;
    }

    public void setDay(String data) {
        this.day = data;
    }

    public void setDayOfWeek(String data) {
        this.dayOfWeek = data;
    }

    public void setMonth(String data) {
        this.month = data;
    }

    public void setTotalCents(Integer data) {
        this.totalCents = data;
    }

    public void setTotalDollars(Integer data) {
        this.totalDollars = data;
    }

    public void setTotalHours(Integer data) {
        this.totalHours = data;
    }

    public void setTotalMins(Integer data) {
        this.totalMins = data;
    }

}