#[leosr.tk](http://leosr.tk)

A map of some [RTK](https://en.wikipedia.org/wiki/Real_Time_Kinematic) base stations near Winnipeg.

Each base station has a radius of ~8 miles which will have sub-inch GPS accuracy. The blue circles indicate that the GPS correction signal ([CMR+](ftp://hayeshelp.com/TechDocs/rtcm3_v_cmr.pdf)) is broadcasting over [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol), tractors using this correction signal would have a modem in the cab with a SIM card that has a small data plan. The red circles indicate that the GPS correction signal is being broadcast via 900Mhz radio.

###Pros/Cons of modem/radio
| modem pros | modem cons | radio pros | radio cons |
| ---------- | ---------- | ---------- | ---------- |
No line of sight problems, works anywhere you have a cellular signal | have to pay ~$15/month for a small data plan | You could use a mobile base station and move it around with you field to field | Needs direct line of sight to the base station in order to receiver the signal |
