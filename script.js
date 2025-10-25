function updateCountdown() {
      const ramzanDate = moment("2026-02-17 00:00:00");
        const now = moment();
          const diff = moment.duration(ramzanDate.diff(now));

            document.getElementById("months").textContent = diff.months();
              document.getElementById("days").textContent = diff.days();
                document.getElementById("hours").textContent = diff.hours();
                  document.getElementById("minutes").textContent = diff.minutes();
                    document.getElementById("seconds").textContent = diff.seconds();
                    }

                    setInterval(updateCountdown, 1000);
                    updateCountdown();
}