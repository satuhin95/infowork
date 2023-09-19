
      if ('getBattery' in navigator) {
        navigator.getBattery().then(function(battery) {
            // Update the battery status when it changes
            function updateBatteryStatus() {

                var fullNum = (battery.level * 100);
                    var nowHum = 0;

                    function engChange(){   
                        if( nowHum < fullNum ){
                            nowHum +=1;
                            var newText = nowHum 
                            if( nowHum <= 9 ){
                                newText =  "0" + nowHum 
                                
                            };
                            
                            document.getElementById('battery-level').textContent = newText;
                            
                        }
                    };

                    setInterval( engChange,(2000/fullNum))
            }

            // Initial update
            updateBatteryStatus();

            // Listen for changes in the battery status
            battery.addEventListener('levelchange', updateBatteryStatus);
        });
    } else {
        document.getElementById('battery-level').textContent = 'Not';
    }

    
