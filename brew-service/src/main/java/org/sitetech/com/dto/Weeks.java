package org.sitetech.com.dto;

import java.util.ArrayList;
import java.util.Date;

public class Weeks {

    private String currentWeek;
    private Date dateCreated;
    private Integer totalCents;
    private Integer totalDollars;
    private Integer totalHours;
    private Integer totalMins;
    private ArrayList<Panels> panels;

    // Getters
    public String getCurrentWeek() {
        return currentWeek;
    }

    public Date getDateCreated() {
        return dateCreated;
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

    public ArrayList<Panels> getPanels() {
        return panels;
    }

    // Setters
    public void setCurrentWeek(String data) {
        this.currentWeek = data;
    }

    public void setDateCreated(Date data) {
        this.dateCreated = data;
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

    public void setPanels(ArrayList<Panels> data) {
        this.panels = data;
    }

    public void addPanel(Panels data) {
        this.panels.add(data);
    }

    @Override
    public String toString() {
        return "";
    }
}