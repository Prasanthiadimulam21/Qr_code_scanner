let scanner;

function startScanner() {

    if (scanner) {
        return;
    }

    scanner = new Html5Qrcode("reader");

    const config = {
        fps: 10,
        qrbox: {
            width: 250,
            height: 250
        }
    };

    scanner.start(
        { facingMode: "environment" },
        config,

        function(decodedText) {

            document.getElementById("result").innerText = decodedText;

            console.log("QR Code:", decodedText);

            scanner.stop().then(() => {
                scanner.clear();
                scanner = null;
            });

        },

        function(errorMessage) {
            // QR code not detected
        }
    ).catch(function(error) {
        document.getElementById("result").innerText =
            "Camera access failed: " + error;
    });
}