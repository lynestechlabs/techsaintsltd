
     
     
      var video = document.getElementById("myVideo");

      video.addEventListener("timeupdate", function () {
        if (video.currentTime >= 20) {
          video.currentTime = 10; // Set the desired loop timing in seconds
        }
      });

      // const hamburgerBtn = document.querySelector(".humburger");
      const hamburger = document.querySelector('.hamburger');
      const navLinks = document.querySelector('nav');

      hamburger.addEventListener('click',() => {
        // alert('button clicked');
         navLinks.classList.toggle('active');
      });
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.navLinks') && !e.target.closest('.hamburger')) {
            // menu.classList.remove('active');
        }
        });

        window.addEventListener('scroll', function() {
          var header = document.querySelector('header');
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          
          if (scrollTop > 0) {
            header.classList.add('header-scrolled');
          } else {
            header.classList.remove('header-scrolled');
          }
        });


        function downloadPDF(url,Filename){
          const link=document.createElement('a');
          link.href=url;
          link.download=Filename;
          link.target='_blank';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

        }

        const downloadbtn=document.querySelector("#cta-btn");
        downloadbtn.addEventListener("click",function(){
          // console.log('btn clicked');
          const documentUrl="images/flyer2.pdf";
          const link=document.createElement("a");
          link.href=documentUrl;
          link.download="flyer2.pdf";
          link.click();
        });
        //Get all the "Read More" buttons
          const readMoreBtn = document.querySelectorAll('.read-more-btn');
          const hiddenContent = document.querySelector('.moreText');

          // readMoreBtn.addEventListener('click',(e)=>{
          //   text.classList.toggle('show-more');
          // })

          // Loop through each button
          // readMoreBtn.forEach(btn => {
          //   btn.addEventListener('click', () => {
          //     const hiddenContent = btn.nextElementSibling;
          //     if (hiddenContent.classList.contains('hidden-content')) {
          //       hiddenContent.classList.remove('hidden-content');
          //       btn.textContent = 'Read Less';
          //     } else {
          //       hiddenContent.classList.add('hidden-content');
          //       btn.textContent = 'Read More';
          //     }
          //   });
          // });

          // Get all "Read More" buttons
          var readMoreButtons = document.querySelectorAll(".read-more-btn");
                    // Loop through each button and add event listener
          readMoreButtons.forEach(function(button) {
            button.addEventListener("click", function() {
              var targetId = this.dataset.target;
              var targetText = document.getElementById(targetId);
              
              if (targetText.style.display === "none") {
                targetText.style.display = "inline";
                this.textContent = "Read Less";
              } else {
                targetText.style.display = "none";
                this.textContent = "Read More";
              }
            });
          });
