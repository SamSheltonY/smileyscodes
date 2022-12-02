public class NextFriday_AC {    
    public static Date getFridays(Integer year, Integer month)
    {
        Date Sunday;
        Datetime dt = (DateTime)Date.newInstance(Date.today().year(),1,1);
        String dayOfWeek = dt.format('EEEE'); 
        System.debug('week:'+dayOfWeek);
        if(dayOfWeek == 'Monday'){
            Sunday = date.newinstance(dT.year(), dT.month(), dT.day()+6);
        }
        if(dayOfWeek == 'Tuesday'){
            Sunday = date.newinstance(dT.year(), dT.month(), dT.day()+5);
        }
        if(dayOfWeek == 'Wednessday'){
            Sunday = date.newinstance(dT.year(), dT.month(), dT.day()+4);
        }
        if(dayOfWeek == 'Thursday'){
            Sunday = date.newinstance(dT.year(), dT.month(), dT.day()+3);
        }
        if(dayOfWeek == 'Friday'){
            Sunday = date.newinstance(dT.year(), dT.month(), dT.day()+2);
        }
        if(dayOfWeek == 'Saturday'){
            Sunday = date.newinstance(dT.year(), dT.month(), dT.day()+1);
        }
        if(dayOfWeek == 'Sunday'){
            Sunday = Sunday = date.newinstance(dT.year(), dT.month(), dT.day());
        }  
        System.debug('Finding Sunday'+Sunday);
        
        Date myDate = Date.newInstance(2022,12,24);
        Date EnteredDateNextFriday;
        Date monthStart = Date.newInstance(year, month, 1);
        Integer daysAfterSunday = Math.mod(Sunday.daysBetween(monthStart), 7);
        Date firstFriday = monthStart.addDays(5 - daysAfterSunday);
        if (firstFriday < monthStart)
            firstFriday = firstFriday.addDays(7);
        
        Datetime pointer = Datetime.newInstance(firstFriday, Time.newInstance(0,0,0,0));
        List<Date> fridays = new List<Date>();
        while (pointer.month() == month)
        {
            fridays.add(pointer.date());
            pointer = pointer.addDays(7);
        }
        System.debug('FIRST FRI :'+fridays[0]);
        for(Date d : fridays){
            if( d > myDate){
                EnteredDateNextFriday = d; 
                System.debug('DATE :'+EnteredDateNextFriday);
                break;
            }
        }
        return EnteredDateNextFriday;
    }
}

//Execute this in annonymous Window
//system.debug(JSON.serialize(NextFriday_AC.getFridays(2022,12)));
