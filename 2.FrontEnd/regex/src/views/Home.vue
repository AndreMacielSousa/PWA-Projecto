<template>
  <b-container fluid>
  

      <article class="intro">
            <p>As linguagens regulares constituem a classe de linguagens com menor poder de representação, sendo
                possível
                desenvolver algoritmos de reconhecimento, existindo várias aplicações, como a analise léxica, sistemas
                de
                animação, hipertextos e hipermédia&nbsp;(Menezes, 2000). As linguagens regulares podem ser presentadas
                por
                um autómato finito e por uma Expressão Regular (REGEX).</p>
            <p><strong>REGEX – Expressões Regulares</strong> – uma forma sequencial de especificar uma linguagem
                regular,
                através de um padrão de <em>Strings </em>que descreve o mesmo que pode ser descrito por um autómato
                finito.&nbsp; Um exemplo, em notação UNIX de uma REGEX “ [A-Z][a-z]*[ ][A-Z][A-Z]” representa uma
                palavra
                iniciada com maiúscula, seguida de espaço e duas maiúsculas, nesta seria aceite a sequência “Porto PT”.
            </p>
            <hr>
        </article>

        <article class="simulador">
            <!--REGEX-->
            <div class="regex">
                <h2>Simulation REGEX</h2>

                <form NAME="myform" ACTION="" METHOD="GET">
                    <div class="form-group1">
                        <label for="str">String:</label><br>
                        <textarea id="str" rows="5" cols="74">4000 Porto PT</textarea>
                    </div>

                    <div class="form-group1">
                        <label for="reg">Regex:&sol;</label>
                        <input type="text" id="reg" value="[A-Z][a-z]*[ ][A-Z][A-Z]" size="53" /> &sol;
                    </div>
                    <div class="form-group1">

                        <p>Flags:
                            <input type="checkbox" id="ignore" value="i"> ignore case (/i)
                            <input type="checkbox" id="global" value="g"> global (/g)
                            <input type="checkbox" id="multi" value="m"> multiline (/m)

                        </p>

                    </div>
                    <div class="form-group1" id="button">
                        <input class="button" TYPE="button" NAME="button" Value="Test" onClick="regex(this.form)">
                    </div>
                </form>

                <p id="valida"></p>
                <p id="extrat"></p>
                <p id="compri"></p>
            </div>
        </article>
        <hr />
        <article class="metodos">

            <hr>
            <h3>Replacement Methods</h3>

            <div class="replace">

                <h4>Examples</h4>
                <hr />
                <form NAME="myform" ACTION="" METHOD="GET">
                    <div class="form-group">
                        <label for="str1">String:</label><br>
                        <select id="str1" size="2" multiple required>

                            <option value="The sky is silver." selected>The sky is silver.</option>
                            <option value="one two three">one two three</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="reg1">Regex:</label><br>
                        <select id="reg1" size="2" multiple required>

                            <option value="/silver/" selected>/silver/</option>
                            <option value="/(\w+)\s(\w+)\s(\w+)/">/(\w+)\s(\w+)\s(\w+)/</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="rep1">Replace:</label><br>
                        <select id="rep1" size="2" multiple required>

                            <option value="blue" selected>blue</option>
                            <option value="$3 $2 $1">$3 $2 $1</option>
                        </select>
                    </div>
                    <div class="form-group" id="button">
                        <input class="button" TYPE="button" NAME="button" Value="Test" onClick="replace(this.form)">
                    </div>
                </form>

                <p id="valida1"></p>
                <p id="replace1"></p>

            </div>

            <div class="testes">


                <h4>Try Youself</h4>
                <hr />
                <form NAME="myform" ACTION="" METHOD="GET">

                    <div class="form-group">
                        <label for="str2">String:</label><br>
                        <textarea id="str2" rows="3" cols="50">one two three</textarea>
                    </div>

                    <div class="form-group">
                        <label for="reg2">Regex:</label><br>
                        <textarea id="reg2" rows="3" cols="50">/(\w+)\s(\w+)\s(\w+)/</textarea>
                    </div>

                    <div class="form-group">
                        <label for="rep2">Replace:</label><br>
                        <textarea id="rep2" rows="3" cols="50">$3 $2 $1</textarea>

                    </div>
                    <div class="form-group" id="button">
                        <input class="button" TYPE="button" NAME="button" Value="Test"
                            onClick="myFunction(2,this.form)">
                    </div>

                    <p id="valida2"></p>
                    <p id="replace2"></p>

            </div>
        </article>



    <!-- Footer -->
    <section c>
      <div class="footer1">
               <p>Projeto de Engenharia Informática 2020 de <a href="https://www.andremaciel.pt"
                target="_blank">André Maciel Sousa</a>
            <small>V.1.1</small>
        </p>
      </div>
    </section>

    <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
    <div class="scroll-to-top d-lg-none position-fixed">
      <a
        class="js-scroll-trigger d-block text-center text-white rounded"
        href="#page-top"
      >
        <i class="fa fa-chevron-up"></i>
      </a>
    </div>
  </b-container>
</template>

<script>
//import { FETCH_ANIMALS } from "@/store/animals/animal.constants";
/*import { FETCH_USERS } from "@/store/users/user.constants";
import { SEND_EMAIL } from "@/store/constants";
import router from "@/router";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data: function () {
    return {
      name: "ricardo",
      email: "ricardo.queiros@gmail.com",
      subject: "teste",
      message: "isto é um teste!",
    };
  },
  computed: {
    ...mapGetters(["getMessage", "auth/isUserLoggedIn"]),
  },
  methods: {
    showRanking() {
      router.push({ name: "ranking" });
    },
    send() {
      this.$store.dispatch(`${SEND_EMAIL}`, this.$data).then(
        () => this.$alert(this.getMessage, "E-mail enviado!", "success"),
        (err) => this.$alert(`${err.message}`, "Erro", "error")
      );
    },
  },
  created() {
    if (this.isUserLoggedIn) {
      //  this.$store.dispatch(`animal/${FETCH_ANIMALS}`);
      this.$store.dispatch(`user/${FETCH_USERS}`);
    }
  },
};*/

function regex() {
  document.getElementById("extrat").style.display = "none";
  document.getElementById("compri").style.display = "none";
  var string = document.getElementById("str").value;
  var regex = document.getElementById("reg").value;
  var slash = "/";
  var flag = "/";

  if (document.getElementById("ignore").checked == true) {
    flag = flag.concat(document.getElementById("ignore").value);
  }

  if (document.getElementById("global").checked == true) {
    flag = flag.concat(document.getElementById("global").value);
  }

  if (document.getElementById("multi").checked == true) {
    flag = flag.concat(document.getElementById("multi").value);
  }

  var regexflag = eval(slash.concat(regex).concat(flag));
  // console.log(regexflag);
  var resultadoV = regexflag.test(string);
  var resultadoE = string.match(regexflag);

  document.getElementById("valida").innerHTML =
    "Match: <b>" + resultadoV + "</b>";
  if (resultadoV) {
    document.getElementById("extrat").style.display = "block";
    document.getElementById("compri").style.display = "block";
    document.getElementById("extrat").innerHTML = "String(s): " + resultadoE;
    var resultadoL = string.match(regexflag).length;
    document.getElementById("compri").innerHTML =
      "# " + resultadoL + " result(s)";
  }
}

// Simulações de Replace
function replace() {
  var testStr = document.getElementById("str1").value;
  //console.log(testStr);
  var testRegex = eval(document.getElementById("reg1").value);
  var replaceText = document.getElementById("rep1").value;
  var resultadoV = testRegex.test(testStr);
  var result = testStr.replace(testRegex, replaceText);
  document.getElementById("valida1").innerHTML =
    "Match: <b>" + resultadoV + "</b>";
  document.getElementById("replace1").innerHTML =
    "Result: <u> " + result + "</u>";
}

// Testes Gerais

function myFunction(i) {
  var testStr = document.getElementById("str" + i).value;
  var testRegex = eval(document.getElementById("reg" + i).value);
  var replaceText = document.getElementById("rep" + i).value;
  var resultadoV = testRegex.test(testStr);
  var result = testStr.replace(testRegex, replaceText);
  document.getElementById("valida" + i).innerHTML =
    "Match: <b>" + resultadoV + "</b>";
  document.getElementById("replace" + i).innerHTML =
    "Result: <u> " + result + "</u>";
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: sans-serif;
  font-size: 100%;
}

/************** Footer **************/

#footer1 {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #333333;
  font-size: 0.75em;
  color: #ffffff;
  text-align: center;
}

a:link,
a:visited {
  color: #ffffff;
}

#footer1 small {
  color: #ff0000;
}

/************** Menu Configurations **************/

#menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
  font-size: 0.95em;
  font-weight: bold;
}

#menu li {
  float: left;
}

#menu li a {
  display: block;
  text-align: center;
  padding: 17px 10px;
  text-decoration: none;
}

#menu li a:hover {
  background-color: #999999;
}

#menu li.eng {
  margin-right: 5px;
  margin-top: 7px;
  float: right;
  width: 50px;
  /*	background: url("./assets/enflag.png"); */
  background-position: center center;
  background-repeat: no-repeat;
}

#menu li.esp {
  margin-right: 5px;
  margin-top: 7px;
  float: right;
  width: 50px;
  /*	background: url("./assets/esflag.png"); */
  background-position: center center;
  background-repeat: no-repeat;
}

#menu li.prt {
  margin-right: 5px;
  margin-top: 7px;
  float: right;
  width: 50px;
  /*	background: url("./assets/ptflag.png"); */
  background-position: center center;
  background-repeat: no-repeat;
}

#menu li.sos {
  margin-right: 5px;
  float: right;
  font-style: italic;
  font-variant: small-caps;
}

/************** Start **************/

#corpo {
  text-align: justify;
  font-size: 0.9em;
  margin-left: 20px;
  margin-right: 20px;
}

#corpo img {
  width: 80%;
}

/************** Canvas THREE JS**************/

#mycanvas {
  text-align: center;
  position: absolute;
  width: 100%;
  height: 20%;
  margin-bottom: 15px;
  padding-bottom: 30px;
}

/************** Simulator DFA **************/

table,
th,
td {
  border: 0px solid #000000;
  vertical-align: top;
}

em {
  font-size: 0.7em;
}

/* botoes do DFA */

#fileToLoad,
#constroi_transitions,
#nEstados,
#symbols,
#simula_passo,
#create_graph_desc,
#save {
  font-size: 1.1em;
  color: white;
  background-color: #008cff;
}

/* tabela transiÃ§Ãµes */

#transitions {
  text-align: center;
}

/* botao Simlar da tabela*/

#run_simul {
  font-size: 1em;
  color: white;
  background-color: #077004;
}

/* botao limpar da tabela*/

#limp_simul {
  font-size: 1em;
  color: white;
  background-color: #ff0000;
}

/* Tabela que recebe a div step-by-step */

#passos {
  margin-bottom: 15px;
  padding-bottom: 80px;
}

/* Div step-by-step */

#simula_viz {
  font-size: 0.9em;
}

/* Div step-by-step: mensagem resultado */

#resultado {
  font-size: 1em;
  color: blue;
}

/*Tabela de SimulaÃ§Ã£o*/

#simTable {
  font-size: 1em;
  text-align: center;
  font-family: monospace;
}
</style>