basic.forever(function () {
    datalogger.mirrorToSerial(true)
    SCD40.start_continuous_measurement()
    datalogger.log(datalogger.createCV("Temperatur", SCD40.get_temperature(SCD40.SCD40_T_UNIT.C)))
    SCD40.stop_continuous_measurement()
})
