window.addEventListener('load', function () {
    let isFinish = false
    let finishFrameClass = ''

    function finish() {
        gsap.to('.scroller', {
            scale: 1.1,
            opacity: 0,
            duration: 0.5,
            delay: 0.4,
            onComplete: () => {
                gsap.set('.scroller', { display: 'none' })
                document.querySelector('.banner').addEventListener('click', ctaFunction)
            }
        })

        gsap.to('.' + finishFrameClass, {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            delay: 1,
            ease: 'none',
        })

        gsap.to('.text', {
            opacity: 1,
            duration: 0.7,
            delay: 1,
            display: 'block'
        })

        gsap.to('.btn', {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            delay: 1,
        })

        gsap.to('.btn', {
            scale: 0.98,
            
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            delay: 1.2,
        })
    }

    gsap.fromTo(
        '.scroller', {
            x: 80,
        }, {
            x: 120,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: Power0.easeNone,
            onUpdate: function () {
                let x_start = this.vars.startAt && this.vars.startAt.x || 0
                let x_finish = this.vars.x
                let width = Math.round(x_start + (this.progress() * (x_finish - x_start)));
                gsap.set('.after', {
                    width
                })
            }
        }
    );

    Draggable.create(".scroller", {
        type: "x",
        edgeResistance: 1,
        bounds: ".banner",
        inertia: true,
        onDrag: function () {
            dragft();
            
            gsap.set('.after', {
                width: this.x
            })

            if (((this.x < this.minX + 50) || (this.x > this.maxX - 50)) && !isFinish) {
                if (this.x < this.minX + 50) {
                    finishFrameClass = 'finish-frame_l'
                }

                if (this.x > this.maxX - 50) {
                    finishFrameClass = 'finish-frame_r'
                }

                dragft2();
                isFinish = true;
                finish();
            }
        },
    });
})