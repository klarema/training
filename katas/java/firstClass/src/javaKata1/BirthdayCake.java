package javaKata1;

public class BirthdayCake extends Cake{
    private int candles;

    public BirthdayCake(String flavour, int candles) {
        super(flavour);
        this.candles = candles;
    }

    public void setCandles(int candles) {
        this.candles = candles;
    }

    public int getCandles() {
        return candles;
    }
}
