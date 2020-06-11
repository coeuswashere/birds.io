setTimeout(function() {
  var s = document.querySelector('#scene-layout')
  var ss = s.getBoundingClientRect()
  var p = document.querySelector('#plant')
  var sb = document.querySelector('#score-box')
  var sc = document.querySelector('#score')
  sb.style.top = (window.innerHeight - 480)*.5 + 'px'
  sb.style.left = ((window.innerWidth - 640)*.5) + ss.width + 'px'
  var x = 0
  var y = 0
  var t = 0

  s.addEventListener('mousemove', function(e) {  
    x = e.clientX - ss.left
    y = e.clientY - ss.top
    // s.innerHTML = x + " / " + y

    if(x > 0 && x < ss.width) {
      p.style.left = x - 20 + 'px'
    }
    if(y > 0 && y < ss.height) {
      p.style.top = y - 20 + 'px'
    }  
  })

  document.querySelector('#start').addEventListener('click', function() {
    document.querySelector('#intro').style.top = '-400px'
    if(document.querySelector('.dead')){      
      p.classList.remove('dead')
      p.style.width = '40px'
      p.style.height = '40px'
      sc.innerHTML = 0
      if(document.querySelector('.high')){
        document.querySelector('.high').classList.remove('high')
      }
      document.querySelectorAll('.beams').forEach(function(elm){
        elm.remove()
      })
    }    

    function beam() {
      var b = document.createElement('div')
      b.className = Math.random() < .5 ? 'beams beamRight' : 'beams beam';
      // b.style.top = Math.random() < .5 ? '33%' : '66%'
      b.style.top = Math.random() < .5 ? y + 'px' : Math.random()*(ss.height - 40) + 'px'
      if(document.querySelectorAll('.beams').length >= 6) {
        b.style.animationDuration = '1.5s'      
      }
      s.appendChild(b)

      var b = document.createElement('div')
      b.className = Math.random() < .5 ? 'beams beamTop' : 'beams beamBottom';
      b.style.left = Math.random() < .5 ? x + 'px' : Math.random()*(ss.width - 40) + 'px'
      // b.style.left = Math.random() < .5 ? '33%' : '66%'
      s.appendChild(b)    
    }  

    function collison() {   
      var rocks = document.querySelectorAll('.beams')
      var s_rect = document.querySelector('#col').getBoundingClientRect()
      var pp = p.getBoundingClientRect()
      t++
      if(t % 30 === 0) {
        p.style.width = pp.width + 1 + 'px'
        p.style.height = pp.height + 1 + 'px'
      }

      rocks.forEach(function(elm) {
        var b = elm.getBoundingClientRect()         
        var ouch = !(s_rect.right < b.left || 
                     s_rect.left > b.right || 
                     s_rect.bottom < b.top || 
                     s_rect.top > b.bottom)
        if(ouch){
          elm.remove()
          p.classList.add('dead')
          setTimeout(function(){
            if(localStorage.getItem('plantyy')) {            
              if(localStorage.getItem('plantyy') < parseInt(sc.innerHTML)) {
                localStorage.setItem('plantyy', sc.innerHTML);
                sb.classList.add('high')
              }
            } else {
              localStorage.setItem('plantyy', sc.innerHTML);
              sb.classList.add('high')
            }
            document.querySelector('#intro').style.top = '50%'  
            document.querySelector('#start').innerHTML = '> TRY AGAIN <'
          },2000)        
          clearInterval(kill)
          clearInterval(addBeams)    
          // document.localStorage.set('plantyy', sc.innerHTML)
        }
      })

      sc.innerHTML = rocks.length
    }

    var addBeams = setInterval(beam,2500)
    var kill = setInterval(collison,1000/30)  
    })

},500)