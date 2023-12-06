export default {

    tableHead:["Pretraga","Rezultat","Jedinica","Referentni interval"],

    cases : [
    {
        uvodni_text:"Dječak, 15 god, doveden je u pedijatrijsku ambulantu zbog simptoma koji traju otprilike tjedan dana. Roditelji navode da je dječak počeo osjećati umor, malaksalost te je razvio visoku temperaturu koja nije reagirala na uobičajene antipiretike. Također, žalio se na bolove u grlu i poteškoće pri gutanju. Roditelji su primijetili blago povećane limfne čvorove na vratu."
        ,nalaz:{
            tableTitle:["Eritrociti", "Hemoglobin", "Hematokrit", "MCV", "MCH", "MCHC", "RDW"],
            tableData: [
                [ "4,8", "x1012 /L", "4,34-5,72"],
                [ "138", "g/L", "120-160"],
                [ "0,400", "L/L", "0,360-0,460"],
                [ "85", "fL", "83,0-97,2"],
                [ "29", "pg", "27,4-33,9"],
                [ "335", "g/L", "320-345"],
                [ "14", "%", "9,0-15,0"]
            ]
            
        }
        ,prviSetPitanja : [
            {
              question: 'Što od navedenog nije klinički parametar za dijagnostiku infektivne mononukleoze?',
              answers: ['tonzilofaringitis', 'limfadenopatija', 'glavobolja', 'vručica'],
              correctAnswer: 'glavobolja'
            },
            {
              question: 'Koji biokemijski te koji hematološki parametri služe za dijagnostiku infektivne mononukleoze?',
              answers: ['Jetreni parametri i reaktivni limfociti', 'Amilaza i reaktivni limfociti', 'Jetreni parametri i Gumprechtove sjene', 'LDH i vlasaste stanice'],
              correctAnswer: 'Jetreni parametri i reaktivni limfociti'
            },
            {
              question: 'Kakve karakteristične stanice očekujete u razmazu periferne krvi?',
              answers: ['Gumprechtove sjene', 'Vlasaste stanice', 'Nesegmentirane granulocite', 'Reaktivne limfocite'],
              correctAnswer: 'Reaktivne limfocite'
            }
          ],
          drugiSetPitanja : [
            {
              question: 'Koje su morfološke karakteristike reaktivnih limfocita?',
              answers: [
                'oskudna citoplazma i pravilno okrugla jezgra',
                'obilna citoplazma s bazofilnim rubom i pravilno okrugla jezgra',
                'obilna citoplazma s bazofilnim rubom i jezgra nepravilnog oblika',
                'oskudna citoplazma i jezgra nepravilnog oblika'
              ],
              correctAnswer: 'obilna citoplazma s bazofilnim rubom i jezgra nepravilnog oblika'
            },
            {
              question: 'Koja skupina testova nije još napravljena, a važna je u dijagnostici infektivne mononukleoze?',
              answers: ['PCR', 'Serološki testovi', 'Citokemijski testovi', 'Histološki testovi'],
              correctAnswer: 'Serološki testovi'
            },
          ],
          treciSetPitanja:[],

          uris:[
            require('../images/Pngovi/Reaktivni_limfocit/RLY_1103640.jpg'),
            require('../images/Pngovi/Reaktivni_limfocit/RLY_1103648.jpg'),
            require('../images/Pngovi/Reaktivni_limfocit/RLY_1103656.jpg'),
            require('../images/Pngovi/Reaktivni_limfocit/RLY_1103680.jpg'),
            require('../images/Pngovi/Reaktivni_limfocit/RLY_1103689.jpg'),
            require('../images/Pngovi/Reaktivni_limfocit/RLY_1145930.jpg'),
            require('../images/Pngovi/Segmentirani_granulocit/SNE_1237445.jpg'),
            require('../images/Pngovi/Segmentirani_granulocit/SNE_1237454.jpg'),
            require('../images/Pngovi/Segmentirani_granulocit/SNE_1241041.jpg'),

          ],

          potvrdne_pretrage:[],
          
          dijagnoza:'Mononukleoza'
             
    },



    ]


}