datalogger.onLogFull(function () {
    basic.setLedColors(0xff0000, 0x000000, 0x000000)
    basic.pause(100)
    basic.setLedColors(0x000000, 0xff0000, 0x000000)
    basic.pause(200)
    basic.setLedColors(0x000000, 0x000000, 0xff0000)
    basic.pause(100)
})
loops.everyInterval(500, function () {
    datalogger.mirrorToSerial(true)
    SCD40.start_continuous_measurement()
    datalogger.log(
    datalogger.createCV("Temperatur", SCD40.get_temperature(SCD40.SCD40_T_UNIT.C)),
    datalogger.createCV("Relative Luftfeuchtigkeit", SCD40.get_relative_humidity()),
    datalogger.createCV("", 0)
    )
    SCD40.stop_continuous_measurement()
})
basic.forever(function () {
	
})
