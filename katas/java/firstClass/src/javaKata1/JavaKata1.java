package javaKata1;

public class JavaKata1 {
    private int id;
    private double baseCost;
    private int allottedMins;
    private int minutesUsed;
    private int overageInMins = 0;
    private double overageCost = 0;
    private double taxCalculated = 0;

    public JavaKata1(int id){
        setID(id);
        this.baseCost = 0;
        this.allottedMins = 0;
        this.minutesUsed = 0;
    }
    public JavaKata1(int id, double baseCost, int allottedMins, int minutesUsed){
        setID(id);
        setBase(baseCost);
        setAllottedMins(allottedMins);
        setMinutesUsed(minutesUsed);
    }
    public void setID(int id){
        this.id = id;
    }
    public int getID(){
        return id;
    }
    public void setBase(double base){
        this.baseCost = base;
    }
    public void setAllottedMins(int minsAllotted){
        this.allottedMins = minsAllotted;
    }
    public void setMinutesUsed(int minsUsed){
        this.minutesUsed = minsUsed;
    }
    public void calculateOverage(){
        if(minutesUsed > allottedMins)
            overageInMins = minutesUsed - allottedMins;
    }
    public void calculateOverageCost(){
        double costOveragePerMinute =  0.25;
        if(overageInMins > 0){
            overageCost = overageInMins * costOveragePerMinute;
        }
    }
    public void calculateTaxFee(){
        double tax = 0.15;
        if(overageInMins > 0){
            taxCalculated = overageCost * tax;
        }
    }
    public String printBill(){
        calculateOverage();
        calculateOverageCost();
        calculateTaxFee();
        String billing = "This is your bill: \nBase cost: " + baseCost +
                "\nOverage: " + overageCost +
                "\nTax: " + taxCalculated +
                "\nTotal bill: " + (baseCost+overageCost+taxCalculated);
        return billing;
    }
}
