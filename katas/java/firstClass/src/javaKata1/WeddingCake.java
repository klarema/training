package javaKata1;

public class WeddingCake extends Cake {
    private int tiers;
    public WeddingCake(String flavour, int tiers){
        super(flavour);
        this.tiers = tiers;
    }

    public void setTiers(int tiers) {
        this.tiers = tiers;
    }

    public int getTiers() {
        return tiers;
    }
}
