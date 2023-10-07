const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

const numero = document.getElementById("numero")


toastTrigger.addEventListener("click" , ()=> {

    parseInt(numero.value)

  if(numero.value == '') {
    alert("Nenhum valor digitado")
    return
  }

    if (numero.value <= 5) {

      document.getElementById("mensagem-img").innerHTML = "Só isso ? :("
      document.querySelector("img").src = "https://upload.wikimedia.org/wikipedia/commons/b/bb/Broken_heart.svg"

      document.getElementById("mensagem-text").innerHTML = "O valor inserido é muito baixo, seu namorado vai chorar se ficar sabendo disso.Favor inserir um valor descente."

    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
   toastBootstrap.show()
    } else if (numero.value >= 6 && numero.value < 50){
      document.getElementById("mensagem-img").innerHTML = "Ele te ama mais"
      document.querySelector("img").src = "https://w7.pngwing.com/pngs/820/953/png-transparent-love-hearts-love-hearts-red-heart-love-heart-computer-icons.png"

      document.getElementById("mensagem-text").innerHTML = "O seu namorado definitivamente te ama mais"

    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
   toastBootstrap.show()
    } else if (numero.value >= 50 && numero.value <= 500 ) {
      document.getElementById("mensagem-img").innerHTML = "Ele te ama mais"
      document.querySelector("img").src = "https://w7.pngwing.com/pngs/820/953/png-transparent-love-hearts-love-hearts-red-heart-love-heart-computer-icons.png"

      document.getElementById("mensagem-text").innerHTML = "Até que você ama bastante, mas com certeza o seu namorado ainda ama mais"

    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
   toastBootstrap.show()
    } else if (numero.value > 500) {
      document.getElementById("mensagem-img").innerHTML = "Ele te ama muitoooo mais"
      document.querySelector("img").src = "https://w7.pngwing.com/pngs/820/953/png-transparent-love-hearts-love-hearts-red-heart-love-heart-computer-icons.png"

      document.getElementById("mensagem-text").innerHTML = "Boa tentativa, mas o amor do seu namorado por você,ainda é maior !!!"

    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
   toastBootstrap.show()
    }
})



document.getElementById("limpar").addEventListener("click" , () => {
  numero.value = '';
})