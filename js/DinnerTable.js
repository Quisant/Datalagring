class DinnerModel{
    x = 1;
    constructor(guests = 2)
    {
        this.setNumberOfGuests(guests);
    }
    setNumberOfGuests(x)
    { 
        if(x <= 0 || !Number.isInteger(x))
        {
            throw 'This aint it chief';
        }
        else{
            this.numberOfGuests = x;
        }
    } 
}
