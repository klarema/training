package javaKata1;

public class Cake {
    private String flavour;
    private double price;
    Cake(String flavour){
        setFlavour(flavour);
        this.price = price;
    }

    public void setFlavour(String flavour) {
        this.flavour = flavour;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getFlavour() {
        return flavour;
    }

    public double getPrice() {
        return price;
    }
}
