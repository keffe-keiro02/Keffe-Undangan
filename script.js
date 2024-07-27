function updateCountdown() {
            const eventDate = new Date('october 04, 2024 00:00:00').getTime();
            const now = new Date().getTime();
            const distance = eventDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('countdown').innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";

            if (distance < 0) {
                clearInterval(countdownInterval);
                document.getElementById('countdown').innerHTML = "The event has started!";
            }
        }

        const countdownInterval = setInterval(updateCountdown, 1000);

        document.getElementById('darkModeToggle').addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            this.classList.toggle('active');
        });