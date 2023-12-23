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

        potvrdne_pretrage:{},
          
        dijagnoza:'Mononukleoza'
             
    },


    {
      uvodni_text: "M, 44 god. primljen u HS zbog sumnje na akutnu leukozu. Unazad nekoliko dana žali se na umor, malaksalost, bolove u mišićima te zaduhu prilikom jačih fizičkih aktivnosti. Subfebrilan, negira noćno znojenje. Apetit je dobar, tjelesna težina stabilna, mokrenje i stolica uredni. Ne pije niti puši. Bez organomegalije.",
      nalaz: {
          tableTitle: [
            "Eritrociti", 
            "Hemoglobin", 
            "Hematokrit", 
            "MCV", 
            "MCH", 
            "MCHC", 
            "RDW",
            "Leukociti",
            "Eozinofilni granulociti",
            "Segmentirani granulociti",
            "Limfociti",
            "Monociti",
            "Mijelociti",
            "Promijelociti",
            "Blasti",
            "Glukoza",
            "Bilirubin- ukupni",
            "Urea",
            "Kreatinin",
            "Alkalna fosfataza",
            "Aspartat-aminotransferaza",
            "Alanin-aminotransferaza",
            "Gama-glutamil-transferaza",
            "Laktat-dehidrogenaza",
            "C reaktivni protein",
            "Kalij",
            "Natrij"
          ],
          tableData: [
            [ "3,32", "x1012 /L", "4,34-5,72"],
            [ "120", "g/L", "138-175"],
            [ "0,382", "L/L", "0,415-0,530"],
            [ "97,5", "fL", "83,0-97,2"],
            [ "32,3", "pg", "27,4-33,9"],
            [ "336", "g/L", "320-345"],
            [ "20,8", "%", "9,0-15,0"],
            [ "28,1", "x10^9 /L", "3,4-9,7"],
            [ "2,0", "%", "0-7"],
            [ "4,0", "%", "44-72"],
            [ "23,0", "%", "20-46"],
            [ "7,0", "%", "2-12"],
            [ "1", "%", ""],
            [ "2", "%", ""],
            [ "61", "%", ""],
            [ "0,31", "x10^9 /L", "0,00-0,43"],
            [ "0,76", "x10^9 /L", "2,06-6,49"],
            [ "5,15", "x10^9 /L", "1,19-3,35"],
            [ "1,46", "x10^9 /L", "0,12-0,84"],
            [ "0,52", "x10^9 /L", ""],
            [ "0,26", "x10^9 /L", ""],
            [ "16,20", "x10^9 /L", ""],
            [ "5,2", "mmol/L", "4,4-6,4"],
            [ "4", "µmol/L", "3-20"],
            [ "3,8", "mmol/L", "2,8-8,3"],
            [ "101", "µmol/L", "79-125"],
            [ "115", "U/L", "60-142"],
            [ "33", "U/L", "11-38"],
            [ "14", "U/L", "12-48"],
            [ "23", "U/L", "11-55"],
            [ "573", "U/L", "<241"],
            [ "55,4", "mg/L", "<5"],
            [ "4,1", "mmol/L", "3,9-5,1"],
            [ "142", "mmol/L", "137-146"]
          ]
        
        
      },
      prviSetPitanja: [
        {
          question: 'Simptomi poput umora, malaksalosti i zaduha vjerojatno su posljedica:',
          answers: ['pojačane hematopoeze', 'smanjene hematopoeze', 'neutropenije', 'trombofilije'],
          correctAnswer: 'smanjene hematopoeze'
        },
        {
          question: 'Simptomi generaliziranih ili lokaliziranih infekcija uz vrućicu te klinički znakovi krvarenja vodeći su početni simptomi:',
          answers: ['megaloblastične anemije', 'neutrofilije', 'akutne leukemije', 'gnojne angine'],
          correctAnswer: 'akutne leukemije'
        },
        {
          question: 'Kakve stanice očekujete u razmazu periferne krvi?',
          answers: ['Pokoji blast', 'Većinom blaste', 'Većinom plazma stanice', 'više od 40% nesegmentiranih neutrofila'],
          correctAnswer: 'Većinom blaste'
        },
        {
          question: 'Kakvu kompletnu krvnu sliku očekujete?',
          answers: ['urednu krvnu sliku', 'uredna crvena i bijela loza uz trombocitozu', 'anemiju, trombocitopeniju i leukocitozu', 'eozinofiliju'],
          correctAnswer: 'anemiju, trombocitopeniju i leukocitozu'
        },
      ],
      drugiSetPitanja: [
        {
          question: 'Koji je temeljni kriterij po kojem leukemiju svrstavamo u akutnu?',
          answers: [
            'Prisustvo nezrelih stanica u perifernoj krvi',
            'Visok broj plazma stanica u koštanoj srži',
            'nalaz više od 10% blasta u koštanoj srži ili perifernoj krvi',
            'pozitivan nalaz citokemijskog bojanja nespecifičnom esterazom'
          ],
          correctAnswer: 'nalaz više od 10% blasta u koštanoj srži ili perifernoj krvi'
        },
        {
          question: 'Kakva je karakteristična laboratorijska slika pacijenta u slučaju sumnje na akutnu leukemiju?',
          answers: [
            'normocitna i normokromna anemija, trombocitopenija te prisutnost više od 20% blasta',
            'normocitna i normokromna anemija, trombocitoza te prisutnost više od 20% blasta',
            'mikrocitna i hipokromna anemija, trombocitoza te prisutnost više od 20% blasta',
            'makrocitna i hipokromna anemija, trombocitopenija te prisutnost blasta do 20%'
          ],
          correctAnswer: 'normocitna i normokromna anemija, trombocitopenija te prisutnost više od 20% blasta'
        },
        {
          question: 'Koja je metabolička komplikacija česta kod akutnih leukemija?',
          answers: [
            'hiperbilirubinemija',
            'alkaloza',
            'ketoza',
            'hiperurikemija'
          ],
          correctAnswer: 'hiperurikemija'
        },
        {
          question: 'Vjerojatan uzrok krvarenja je:',
          answers: [
            'trombocitoza',
            'manjak faktora VIII',
            'manjak faktora IX',
            'trombocitopenija'
          ],
          correctAnswer: 'trombocitopenija'
        },
      ],
      
      treciSetPitanja: [
        {
          question: 'Pregled koštane srži kojim se opisuje zastupljenost pojedinih hematopoetskih stanica u koštanoj srži naziva se:',
          answers: ['leukogram', 'limfogram', 'monogram', 'mijelogram'],
          correctAnswer: 'mijelogram'
        },
        {
          question: 'Što je leukogram?',
          answers: [
            'pregled koštane srži koji opisuje zastupljenost i omjer pojedinih bijelih krvnih stanica',
            'pregled koštane srži koji opisuje zastupljenost i omjer hematopoetskih stanica',
            'pregled periferne krvi koji opisuje zastupljenost i omjer pojedinih bijelih krvnih stanica',
            'pregled koštane srži kojim se utvrđuje prisutnost leukemijskog klona'
          ],
          correctAnswer: 'pregled koštane srži koji opisuje zastupljenost i omjer bijelih krvnih stanica'
        },
        {
          question: 'Kod citokemijskog bojanja za AML karakteristično su pozitivni:',
          answers: [
            'Specifična esteraza i mijeloperoksidaza',
            'Sudan crno i alkalna fosfataza',
            'Mijeloperoksidaza i Sudan crno',
            'Specifilna esteraza i alkalna fosfataza'
          ],
          correctAnswer: 'Mijeloperoksidaza i Sudan crno'
        },
        {
          question: 'Za razlikovanje AML i ALL koriste se:',
          answers: [
            'Specifična esteraza',
            'PAS',
            'Mijeloperoksidaza',
            'Nespecifična esteraza uz NaF'
          ],
          correctAnswer: 'PAS'
        },
        {
          question: 'Kojoj kategoriji rizika pripada pacijent u ovom slučaju?',
          answers: [
            'Povoljnoj',
            'Intermedijarnoj',
            'Nepovoljnoj',
            'Nijednoj od navedenih'
          ],
          correctAnswer: 'Nepovoljnoj'
        },
      ],
      
      
      uris: [
            require('../images/Pngovi/Blast/BL_150127.jpg'),
            require('../images/Pngovi/Blast/BL_150131.jpg'),
            require('../images/Pngovi/Blast/BL_150146.jpg'),
            require('../images/Pngovi/Blast/BL_150148.jpg'),
            require('../images/Pngovi/Blast/BL_150167.jpg'),
            require('../images/Pngovi/Blast/BL_150173.jpg'),
            require('../images/Pngovi/Metamijelocit/MMY_151585.jpg'),
            require('../images/Pngovi/Metamijelocit/MMY_150188.jpg'),
            require('../images/Pngovi/Segmentirani_granulocit/SNE_1005462.jpg'),
      ], 
      potvrdne_pretrage: {

         Citoloski_nalaz : `
         Citološki nalaz:

          Mijelogram: blasti-69%, promijelociti-3%, promonociti-2%, mijelociti i metamijelociti-7%, seg.-5%, limfociti-4%, plazma-1%, monociti-2%, eritroblasti-7%
          Dif. KS: bl. 51%, mj.-2%, eo.-2%, seg.-2%, limf.-35%, mo.-8%; E:hipokromija, polikromija, 6 eritroblasta na 100 leukocita.
          Hematopoetsko tkivo obilno. Blasti čine skoro 70% svih stanica. Eritrocitopoeza zastupljena s malobrojnim eritroblastima. Trombocitopoeza oskudna.
          Citokemija: MPO i Sudan pozitivni u 100% blasta, CAE je pozitivna u 50% blasta, ANAE je pozitivna u 40% blasta i ne inhibira se Na-flouridom. PAS je negativan u blastima.
          Mišljenje: citomorfološki i citokemijski: akutna mijeloična leukemija sa sazrijevanjem
          `,
          Citogenetika: {

            tableHead:["Uzorak","Teh. pruganje","Metafaze bez promjena","Metafaze sa promjenama"],
            tableTitle:['Koštana srž'],
            tableData:[['GTG pruge','0','20']]

          } ,

          Mišljenje:'Mišljenje:46, XY, t(11;22)(q23;q11.2)',

          Fish: {

            tableHead:["Uzorak","Tehnika","Proba","Rezultat","Postotak"],
            tableTitle:['Koštana srž','','',''],
            tableData:[
              ['I-FISH','LSI MLL','rearanžman MLL','82%'],
              ['','LSI CBFB','negativno',''],
              ['','LSI RUNX1/RUNX1T1','negativno',''],
              ['','LSI BCR/ABL','negativno',''],
            
            ]


          } ,

          Komentar:'Komentar: U kratkotrajnoj kulturi stanica koštane srži nađen je klon s translokacijom t(11;22) u 20 metafaza. Metodom FISH dokazan je rearanžman MLL gena u 82% interfaznih jezgara. Translokacija t(8;21), translokacija t(9;22) i inverzija kromosoma 16 nisu dokazane.',

          Nalaz_sekvenciranje: {

            tableHead:["Uzorak","Tehnika","Gen","Mutacija","Komentar"],
            tableTitle:['Koštana srž'],
            tableData:[['NGS','TP53','TP53(ENST00000269305.4):c.722C>T','Patogena']]

          }
          
          
      }, 
      dijagnoza: 'Akutna mijeloična leukemija', 
    },


    {
      
        uvodni_text: "M, 52 god. primljen u HS zbog sumnje na KML. Unazad nekoliko tjedana osjeća umor, smanjenu sposobnost izdržljivosti i blagi osjećaj pritiska u lijevom gornjem dijelu trbuha. Negira noćno znojenje, ali spominje povremene glavobolje. Tjelesna težina smanjena za 3 kg u posljednja dva mjeseca. Ne konzumira alkohol i ne puši. Na pregledu povećana slezena. Laboratorijski nalazi pokazuju povišene vrijednosti bijelih krvnih stanica. Ne zna za obiteljsku anamnezu hematoloških bolesti.",
        nalaz: {
          tableTitle: [
            "Eritrociti", "Hemoglobin", "Hematokrit", "MCV", "MCH", "MCHC", "RDW",
            "Leukociti", "Eozinofilni granulociti", "Segmentirani granulociti", "Limfociti", "Monociti", "Mijelociti", "Promijelociti", "Blasti",
            "Glukoza", "Bilirubin- ukupni", "Urea", "Kreatinin", "Alkalna fosfataza", "Aspartat-aminotransferaza", "Alanin-aminotransferaza", "Gama-glutamil-transferaza", "Laktat-dehidrogenaza", "C reaktivni protein", "Kalij", "Natrij"
          ],
          tableData: [
            ["4,2", "x1012 /L", "4,34-5,72"],
            ["120", "g/L", "138-175"],
            ["0,360", "L/L", "0,415-0,530"],
            ["86", "fL", "83,0-97,2"],
            ["28", "pg", "27,4-33,9"],
            ["325", "g/L", "320-345"],
            ["15,5", "%", "9,0-15,0"],
            ["150", "x109 /L", "3,4-9,7"],
            ["4,0", "%", "0-7"],
            ["55,0", "%", "44-72"],
            ["15,0", "%", "20-46"],
            ["5,0", "%", "2-12"],
            ["10,0", "%"],
            ["5,0", "%"],
            ["5,0", "%"],
            ["5,0", "x109 /L", "0,00-0,43"],
            ["80,0", "x109 /L", "2,06-6,49"],
            ["20,0", "x109 /L", "1,19-3,35"],
            ["8,0", "x109 /L", "0,12-0,84"],
            ["25,0", "x109 /L"],
            ["10,0", "x109 /L"],
            ["2,0", "x109 /L"],
            ["5,5", "mmol/L", "4,4-6,4"],
            ["15", "µmol/L", "3-20"],
            ["6,5", "mmol/L", "2,8-8,3"],
            ["90", "µmol/L", "79-125"],
            ["91", "U/L", "60-142"],
            ["40", "U/L", "11-38"],
            ["45", "U/L", "12-48"],
            ["49", "U/L", "11-55"],
            ["501", "U/L", "<241"],
            ["14,0", "mg/L", "<5"],
            ["4,5", "mmol/L", "3,9-5,1"],
            ["140", "mmol/L", "137-146"]
          ]
        },
      
        prviSetPitanja: [
          {
            question: 'Kakvu kompletnu krvnu sliku očekujete?',
            answers: [
              'anemiju i granulocitopeniju s izrazitim skretanjem ulijevo',
              'anemiju i granulocitozu s izrazitim skretanjem ulijevo',
              'anemiju i granulocitozu s više od 20% blasta',
              'anemiju i granulocitopeniju s više od 20% blasta'
            ],
            correctAnswer: 'anemiju i granulocitozu s izrazitim skretanjem ulijevo'
          },
          {
            question: 'Koliki ukupni broj leukocita očekujete?',
            answers: [
              'manje od 3,4 x10^9 /L',
              '3,4 - 9,7 x10^9 /L',
              'do 50 x10^9 /L',
              '50-200 x10^9 /L'
            ],
            correctAnswer: '50-200 x10^9 /L'
          },
          {
            question: 'Odaberite netočnu tvrdnju:',
            answers: [
              '15-20% slučajeva KML otkriva se slučajno tijekom asimptomatske faze',
              'splenomegalija prisutna je u 90% slučajeva',
              'broj trombocita povećan je u otprilike 80% pacijenata',
              'u početnoj fazi javlja se bljedilo zbog anemije'
            ],
            correctAnswer: 'broj trombocita povećan je u otprilike 80% pacijenata'
          },
          {
            question: 'Odaberite točan redoslijed laboratorija kod postavljanja dijagnoze KML:',
            answers: [
              'hematološki, citološki, citogenetski, molekularni',
              'hematološki, molekularni, citološki, citogenetski',
              'hematološki, citogenetski, citološki, molekularni',
              'citološki, citogenetski, hematološki, molekularni'
            ],
            correctAnswer: 'hematološki, citološki, citogenetski, molekularni'
          }
        ],
        drugiSetPitanja: [
          {
            question: 'Koji vitamin B skupine je karakteristično povećan u KML-u?',
            answers: [
              'B9',
              'B12',
              'B6',
              'B2'
            ],
            correctAnswer: 'B12'
          },
          {
            question: 'Koji su biokemijske vrijednosti često povećane u KML-u?',
            answers: [
              'LDH i mokraćna kiselina',
              'kreatinin i AST',
              'glukoza i albumin',
              'urea i ALT'
            ],
            correctAnswer: 'LDH i mokraćna kiselina'
          },
          {
            question: 'Koja od navedenih bolesti ne pripada skupini diferencijalno dijagnostički sličnih KML-u?',
            answers: [
              'Esencijalna tombocitemija',
              'Policitemija vera',
              'Primarna mijelofibroza',
              'Akutna mijeloična leukemija'
            ],
            correctAnswer: 'Akutna mijeloična leukemija'
          },
          {
            question: 'Što od navedenog nije vjerojatan nalaz u krvnoj slici osobe sa sumnjom na KML?',
            answers: [
              'većinom nezreli neutrofili',
              'broj blasta ne prelazi 20%',
              'smanjen apsolutni broj eozinofila i bazofila',
              'anemija'
            ],
            correctAnswer: 'smanjen apsolutni broj eozinofila i bazofila'
          }
        ],
        treciSetPitanja: [
          {
            question: 'Kakav je nalaz koštane srži u kroničnoj fazi KML?',
            answers: [
              'hipocelularna',
              'granulocitno- eritroidni odnos iznosi 10-50:1',
              'granulocitno- eritroidni odnos iznosi 2-5:1',
              'fibroza koštane srži predstavlja znak usporavanja bolesti'
            ],
            correctAnswer: 'granulocitno- eritroidni odnos iznosi 10-50:1'
          },
          {
            question: 'Koju od navedenih metoda ne biste koristili za dokaz Philadelphia kromosom?',
            answers: [
              'Sekvenciranje po Sangeru',
              'G-pruganjem',
              'FISH (fluorescentna in situ hibridizacija)',
              'RT-PCR'
            ],
            correctAnswer: 'Sekvenciranje po Sangeru'
          },
          {
            question: 'Odaberite točno poredane faze KML-a:',
            answers: [
              'asimptomatska, akcelerirana, blastična te kronična faza',
              'akcelerirana, blastična, kronična te asimptomatska faza',
              'kronična, akcelerirana, blastična te asimptomatska faza',
              'asimptomatska, kronična, akcelerirana te blastična faza'
            ],
            correctAnswer: 'asimptomatska, kronična, akcelerirana te blastična faza'
          },
          {
            question: 'Koja od navedenih stanica nije zahvaćena klonalnim poremećajem u KML-u?',
            answers: [
              'neutrofil',
              'megakariocit',
              'T-limfocit',
              'eritroblast'
            ],
            correctAnswer: 'T-limfocit'
          }
        ],
        uris: [
          require('../images/Pngovi/Nesegmentirani_granulocit/BNE_1254419.jpg'),
          require('../images/Pngovi/Nesegmentirani_granulocit/BNE_1254426.jpg'),
          require('../images/Pngovi/Nesegmentirani_granulocit/BNE_1254433.jpg'),
          require('../images/Pngovi/Metamijelocit/MMY_1231516.jpg'),
          require('../images/CaseStudySlike/MY_150084.jpg'),
          require('../images/CaseStudySlike/MY_150175.jpg'),
          require('../images/CaseStudySlike/MY_150183.jpg'),
          require('../images/Pngovi/Segmentirani_granulocit/SNE_1007217.jpg'),
          require('../images/Pngovi/Segmentirani_granulocit/SNE_1007238.jpg'),


        ], 

        dijagnoza: 'KML',



        potvrdne_pretrage: {

          Citoloski_nalaz : `
          Citološki nalaz:
          Mijelogram: Eozinofilni granulociti: 4%, Segmentirani neutrofili: 55%, Limfociti: 15%, Monociti: 5% , Mijelociti: 10% , Promijelociti: 5% ,Blasti: 5%
          
          Hematopoetsko tkivo je obilno predstavljeno s povećanim brojem mijelocita i segmentiranih neutrofila, što je tipično za KML. Povećana je prisutnost eozinofilnih granulocita i mijelocita. Blaga prisutnost blasta ukazuje na odsutnost blastične faze.
          Eritrocitopoeza je normalna, dok je trombocitopoeza blago smanjena.
          Citokemija: Mijeloperoksidaza (MPO): Pozitivan u većini granulocitskih prekursora.
          Sudan crna reakcija: Pozitivna u granulocitskim prekursorima.
          Kloracetatna esteraza (CAE): Pozitivna u većini granulocitskih prekursora.
          Alfa naftil acetat esteraza (ANAE): Pozitivna u nekim granulocitskim prekursorima ali inhibira se natrijum-fluoridom.
          Periodična kiselina Schiff (PAS) reakcija: Negativna u većini stanica.
          
          
          Citokemija: Mijeloperoksidaza (MPO): Pozitivan u većini granulocitskih prekursora.
          Sudan crna reakcija: Pozitivna u granulocitskim prekursorima.
          Kloracetatna esteraza (CAE): Pozitivna u većini granulocitskih prekursora.
          Alfa naftil acetat esteraza (ANAE): Pozitivna u nekim granulocitskim prekursorima ali inhibira se natrijum-fluoridom.
          Periodična kiselina Schiff (PAS) reakcija: Negativna u većini stanica.
          
          
          Mišljenje:
          Na temelju citomorfoloških i citokemijskih karakteristika, nalaz je sugestivan za Kroničnu mijeloičnu leukemiju (KML) u kroničnoj fazi. Preporučuje se daljnja genetska i molekularna analiza, posebno traženje t(9;22) translokacije (Philadelphia kromosom), radi potvrde dijagnoze i određivanja mogućih terapijskih pristupa.

           `,
           Citogenetika: {
 
             tableHead:["Uzorak","Teh. pruganje","Metafaze bez promjena","Metafaze sa promjenama"],
             tableTitle:['Koštana srž'],
             tableData:[['GTG pruge','0','20']]
 
           } ,
 
           Mišljenje:'Mišljenje:46, XY, t(9;22)',
 
           Fish: {
 
             tableHead:["Uzorak","Tehnika","Proba","Rezultat","Postotak"],
             tableTitle:['Koštana srž','','',''],
             tableData:[
               ['I-FISH','LSI MLL','negativno',''],
               ['','LSI CBFB','negativno',''],
               ['','LSI RUNX1/RUNX1T1','negativno',''],
               ['','LSI BCR/ABL','pozitivan','99%'],
             
             ]
 
 
           } ,
 
 
           
       }, 
    },


    {

      uvodni_text:'M. 67 god. je primljen u hematološku službu zbog sumnje na akutnu leukemiju. Tijekom posljednjih nekoliko dana, pacijent je izvijestio o simptomima umora, malaksalosti, bolova u mišićima i poteškoćama s disanjem tijekom intenzivnijih fizičkih aktivnosti. Povremeno je subfebrilan, ali negira noćno znojenje. Apetit mu je nepromijenjen, tjelesna težina stabilna, a funkcija mokraćnog sustava i probavnog trakta je uredna. Pacijent izričito ističe da ne konzumira alkohol niti duhanske proizvode. Klinički pregled nije otkrio uvećane limfne čvorove niti hepatosplenomegaliju.',
      nalaz:{
         tableTitle : [
          "Eritrociti", "Hemoglobin", "Hematokrit", "MCV", "MCH", "MCHC", "RDW",
          "Leukociti", "Eozinofilni granulociti", "Segmentirani granulociti", "Limfociti", "Monociti", "Mijelociti", "Metamijelociti", "Blasti",
          "Eozinofilni granulociti", "Segmentirani granulociti", "Limfociti", "Monociti", "Mijelociti", "Metamijelociti", "Blasti",
          "Glukoza", "Bilirubin-ukupni", "Urea", "Kreatinin", "Alkalna fosfataza", "Aspartat-aminotransferaza", "Alanin-aminotransferaza", "Gama-glutamil-transferaza", "Laktat-dehidrogenaza", "C reaktivni protein", "Kalij", "Natrij"
        ],
        
         tableData : [
          ["3.2", "x10^12 /L", "4.34-5.72"],
          ["95", "g/L", "138-175"],
          ["0.300", "L/L", "0.415-0.530"],
          ["94", "fL", "83.0-97.2"],
          ["24", "pg", "27.4-33.9"],
          ["310", "g/L", "320-345"],
          ["16.0", "%", "9.0-15.0"],
          ["2.5", "x10^9 /L", "3.4-9.7"],
          ["8.0", "%", "0-7"],
          ["40", "%", "44-72"],
          ["36", "%", "20-46"],
          ["8", "%", "2-12"],
          ["2", "%"],
          ["2", "%"],
          ["4", "%"],
          ["0.20", "x10^9 /L", "0.00-0.43"],
          ["1.0", "x10^9 /L", "2.06-6.49"],
          ["0.90", "x10^9 /L", "1.19-3.35"],
          ["0.20", "x10^9 /L", "0.12-0.84"],
          ["0.05", "x10^9 /L"],
          ["0.02", "x10^9 /L"],
          ["0.10", "x10^9 /L"],
          ["5.2", "mmol/L", "4.4-6.4"],
          ["12", "µmol/L", "3-20"],
          ["6.7", "mmol/L", "2.8-8.3"],
          ["88", "µmol/L", "79-125"],
          ["80", "U/L", "60-142"],
          ["28", "U/L", "11-38"],
          ["25", "U/L", "12-48"],
          ["30", "U/L", "11-55"],
          ["280", "U/L", "<241"],
          ["5.0", "mg/L", "<5"],
          ["4.5", "mmol/L", "3.9-5.1"],
          ["138", "mmol/L", "137-146"]
        ]
        
      },
      prviSetPitanja:[],
      drugiSetPitanja:[],
      treciSetPitanja:[],
      uris:[
            require('../images/Pngovi/Blast/BL_150067.jpg'),
            require('../images/Pngovi/Nesegmentirani_granulocit/BNE_151553.jpg'),
            require('../images/Pngovi/Nesegmentirani_granulocit/BNE_151554.jpg'),
            require('../images/Pngovi/Nesegmentirani_granulocit/BNE_151562.jpg'),
            require('../images/Pngovi/Monocit/MO_150103.jpg'),
            require('../images/Pngovi/Monocit/MO_150191.jpg'),
            require('../images/Pngovi/Monocit/MO_150219.jpg'),
            require('../images/CaseStudySlike/MY_1249637.jpg'),
            require('../images/Pngovi/Promijelocit/PMY_150129.jpg'),
      ],
      
      dijagnoza:'MDS',

      potvrdne_pretrage: {

        Citoloski_nalaz : 
        `Citološki nalaz:

        Displazija je prisutna u seriji granulocita, s povećanim brojem eozinofilnih granulocita i mijelocita. Postoji blagi porast u postotku blasta, ali ne doseže prag za akutnu leukemiju. Eritrocitopoeza pokazuje znakove displazije s blagom anemijom, dok je trombocitopoeza također smanjena s abnormalnostima u zrelosti.
        
        Mišljenje:
        
        Na temelju morfoloških promjena i nalaza mijelograma, zaključuje se da pacijent ima mijelodisplastični sindrom (MDS). Preporučuje se daljnje molekularne i citogenetske analize za točnu subklasifikaciju MDS-a i daljnje liječenje
         `,
         Citogenetika: {

           tableHead:["Uzorak","Teh. pruganje","Metafaze bez promjena","Metafaze sa promjenama"],
           tableTitle:['Koštana srž'],
           tableData:[['GTG pruge','0','20']]

         } ,

         Mišljenje:'Mišljenje: 46, XY',

         Fish: {

           tableHead:["Uzorak","Tehnika","Proba","Rezultat","Postotak"],
           tableTitle:['Koštana srž','','',''],
           tableData:[
             ['I-FISH','LSI MLL','negativno',''],
             ['','LSI CBFB','negativno',''],
             ['','LSI RUNX1/RUNX1T1','negativno',''],
             ['','LSI BCR/ABL','negativno',''],
           
           ]


         } ,

         Nalaz_sekvenciranje: {

          tableHead:["Uzorak","Tehnika","Gen","Mutacija","Komentar"],
          tableTitle:['Koštana srž','',''],
          tableData:[
            ['NGS','TET2','NM_001127208.3:c.2474C>G(p.Ser825Ter)',''],
            ['','DNMT3A','NM_022552.5:c.2645G>A(p.Arg882His)',''],
            ['','ASXL1','NM_015338.6:c.1934dup(p.Gly646TrpfsTer12)',''],
          ]

        }


         
     }, 




    },

    {
      uvodni_text:'M, 48 god. učinjena krvna slika u sklopu sistematskog pregleda. Na hematološkom analizatoru dobivene su sljedeće vrijednosti.',
      nalaz:{
         tableTitle : [
          "Eritrociti", "Hemoglobin", "Hematokrit", "MCV", "MCH", "MCHC",
          "Leukociti", "Trombociti"
        ],
        
         tableData : [
          ["3.01", "x10^12 /L", "4.34-5.72"],
          ["168", "g/L", "138-175"],
          ["0.255", "L/L", "0.415-0.530"],
          ["90.2", "fL", "83.0-97.2"],
          ["47.5", "pg", "27.4-33.9"],
          ["542", "g/L", "320-345"],
          ["2.5", "x10^9 /L", "3.4-9.7"],
          ["67", "x10^9 /L", "158-424"]
        ]
        
      },
      
        prviSetPitanja : [
          {
            question: 'Kako matematički izražavamo MCHC?',
            answers: [
              'hematokrit/hemoglobin',
              'MCH/hematokrit',
              'hematokrit/MCH',
              'hemoglobin/hematokrit'
            ],
            correctAnswer: 'hemoglobin/hematokrit'
          },
          {
            question: 'Na što moramo posumnjati u slučaju ovakvog nalaza?',
            answers: [
              'hladne aglutinine i lipemiju',
              'hladne aglutinine i bolest eritrocita',
              'bolest eritrocita i hemolizu',
              'hemolizu i lipemiju'
            ],
            correctAnswer: 'hladne aglutinine i lipemiju'
          },
        ],

        drugiSetPitanja : [
          {
            question: 'Koja je interferencija potvrđena vrijednošću triglicerida?',
            answers: [
              'hemoliza',
              'lipemija',
              'ikterija',
              'hladni aglutinini'
            ],
            correctAnswer: 'lipemija'
          },
          {
            question: 'S čime interferiraju trigliceridi?',
            answers: [
              'interferiraju s rasapom svjetla i apsorpcijom svjetlosti kod određivanja hemoglobina',
              'interferiraju s impendancijskim određivanjem veličine eritrocita',
              'prisutnost visoke koncentracije triglicerida uzrokuje pucanje eritrocita',
              'interferira s impendancijskim određivanjem broja eritrocita'
            ],
            correctAnswer: 'interferiraju s rasapom svjetla i apsorpcijom svjetlosti kod određivanja hemoglobina'
          },
          {
            question: 'Odaberite ispravan redosljed postupaka kojima biste otklonili ovakvu interferenciju',
            answers: [
              'zagrijavanje uzorka na 37° 1 sat, uklanjanje lipemične plazme, nadomještanje lipemične plazme',
              'zagrijavanje uzorka na 37° 1 sat, centrifugiranje, uklanjanje lipemične plazme',
              'centrifugiranje, uklanjanje lipemične plazme, nadomještanje lipemične plazme',
              'uklanjanje lipemične plazme, nadomještanje lipemične plazme, centrifugiranje'
            ],
            correctAnswer: 'centrifugiranje, uklanjanje lipemične plazme, nadomještanje lipemične plazme'
          },
        ],
        treciSetPitanja:[],


      uris:[
            require('../images/Pngovi/Eozinofil/EO_304158.jpg'),
            require('../images/Pngovi/Limfocit/LY_151604.jpg'),
            require('../images/Pngovi/Monocit/MO_150071.jpg'),
            require('../images/Pngovi/Segmentirani_granulocit/SNE_1004854.jpg'),
            require('../images/Pngovi/Segmentirani_granulocit/SNE_1004868.jpg'),
            require('../images/Pngovi/Segmentirani_granulocit/SNE_1004910.jpg'),
            require('../images/Pngovi/Segmentirani_granulocit/SNE_1005401.jpg'),
            require('../images/Pngovi/Segmentirani_granulocit/SNE_1005404.jpg'),
            require('../images/Pngovi/Segmentirani_granulocit/SNE_1005462.jpg'),
      ],
      potvrdne_pretrage:
      {
        Citoloski_nalaz:'Provjerom vrijednosti s biokemijskog analizatora utvrđena je vrijednost triglicerida 107 mmol/L. ',
    },
      
      
      dijagnoza:'Lipemija'


    },

    {
      uvodni_text:'Ž, 37 god. učinjena krvna slika u sklopu sistematskog pregleda. Na hematološkom analizatoru dobivene su sljedeće vrijednosti.',
      nalaz:{
         tableTitle : [
          "Eritrociti", "Hemoglobin", "Hematokrit", "MCV", "MCH", "MCHC",
          "Leukociti", "Trombociti"
        ],
        
         tableData : [
          ["1.68", "x10^12 /L", "3.86-5.08"],
          ["110", "g/L", "119-157"],
          ["0.222", "L/L", "0.356-0.470"],
          ["116.6", "fL", "83.0-97.2"],
          ["58.4", "pg", "27.4-33.9"],
          ["473", "g/L", "320-345"],
          ["5.4", "x10^9 /L", "3.4-9.7"],
          ["188", "x10^9 /L", "158-424"]
        ]
        
      },
      
       prviSetPitanja : [
        {
          question: 'Kako matematički izražavamo MCHC?',
          answers: [
            'hematokrit/hemoglobin',
            'MCH/hematokrit',
            'hematokrit/MCH',
            'hemoglobin/hematokrit'
          ],
          correctAnswer: 'hemoglobin/hematokrit'
        },
        {
          question: 'Na što moramo posumnjati u slučaju ovakvog nalaza?',
          answers: [
            'hladne aglutinine i lipemiju',
            'hladne aglutinine i bolest eritrocita',
            'bolest eritrocita i hemolizu',
            'hemolizu i lipemiju'
          ],
          correctAnswer: 'hladne aglutinine i lipemiju'
        },
        {
          question: 'Kako biste provjerili radi li se o hladnim aglutininima?',
          answers: [
            'centrifugiranjem',
            'provjerom vrijednosti ukupnih proteina',
            'zagrijavanjem uzorka 1 sat na 37°C te ponavljanjem analize',
            'ponavljanjem analize nakon što je uzorak bio 1 sat na sobnoj temperaturi'
          ],
          correctAnswer: 'zagrijavanjem uzorka 1 sat na 37°C te ponavljanjem analize'
        },
      ],

      
       drugiSetPitanja : [
        {
          question: 'S čime interferiraju hladni aglutinini?',
          answers: [
            'interferiraju s rasapom svjetla i apsorpcijom svjetlosti kod određivanja hemoglobina',
            'interferiraju s impendancijskim određivanjem broja i veličine eritrocita',
            'interferira s impendancijskim određivanjem broja i veličine leukocita',
            'interferira s impendancijskim određivanjem broja i veličine trombocita'
          ],
          correctAnswer: 'interferiraju s impendancijskim određivanjem broja i veličine eritrocita'
        },
        {
          question: 'Što od navedenog nije važna predanalitička radnja kada se radi o analizi hladnih aglutinina?',
          answers: [
            'neodgodiva dostava uzorka u laboratorij',
            'dostava uzorka na toplome',
            'neodgodiva analiza uzorka po prijemu u laboratorij',
            'neodgodivo centrifugiranje uzorka na toplom po prijemu u laboratorij'
          ],
          correctAnswer: 'neodgodivo centrifugiranje uzorka na toplom po prijemu u laboratorij'
        },
      ],

      treciSetPitanja:[],
      uris:[
        require('../images/Pngovi/Limfocit/LY_306321.jpg'),
        require('../images/Pngovi/Limfocit/LY_306328.jpg'),
        require('../images/Pngovi/Limfocit/LY_306342.jpg'),
        require('../images/CaseStudySlike/SNE_1237336.jpg'),
        require('../images/CaseStudySlike/SNE_1237338.jpg'),
        require('../images/CaseStudySlike/SNE_1237344.jpg'),
        require('../images/CaseStudySlike/SNE_1237367.jpg'),
        require('../images/CaseStudySlike/SNE_1237373.jpg'),
        require('../images/CaseStudySlike/SNE_1237381.jpg')

      ],
      
      dijagnoza:'Hladni aglutinini',


      potvrdne_pretrage:
      {
        Citoloski_nalaz:
        'Zbog sumnje na hladne aglutinine je uzorak inkubiran na 37° 1 sat. Nakon toga je analiza ponovljena te su dobivene sljedeće vrijednosti:',
        
        Citogenetika: {
 
          tableHead:["Pretraga","Rezultat","Jedinica","Referentni interval"],
          tableTitle: [
            "Eritrociti", "Hemoglobin", "Hematokrit", "MCV", "MCH", "MCHC",
            "Leukociti", "Trombociti"
          ],
          tableData: [
            ["3.02", "x10^12 /L", "3.86-5.08"],
            ["113", "g/L", "119-157"],
            ["0.287", "L/L", "0.356-0.470"],
            ["95.3", "fL", "83.0-97.2"],
            ["32.1", "pg", "27.4-33.9"],
            ["342", "g/L", "320-345"],
            ["6.0", "x10^9 /L", "3.4-9.7"],
            ["192", "x10^9 /L", "158-424"]
          ]

        } ,
    
      },

    },


    {
      uvodni_text:'Ž, 55 god. učinjena krvna slika u sklopu sistematskog pregleda. NIje hematološki bolesnik niti pije lijekove. Na hematološkom analizatoru dobivene su sljedeće vrijednosti.',
      nalaz:{
        tableTitle : [
          "Eritrociti", "Hemoglobin", "Hematokrit", "MCV", "MCH", "MCHC",
          "Leukociti", "Trombociti"
        ],
        
         tableData : [
          ["4.21", "x10^12 /L", "3.86-5.08"],
          ["132", "g/L", "119-157"],
          ["0.374", "L/L", "0.356-0.470"],
          ["87.3", "fL", "83.0-97.2"],
          ["32.7", "pg", "27.4-33.9"],
          ["331", "g/L", "320-345"],
          ["4.7", "x10^9 /L", "3.4-9.7"],
          ["55", "x10^9 /L", "158-424"]
        ]
        
      },
      
      
       prviSetPitanja : [
        {
          question: 'Koja od navedenih predanalitičkih pogrešaka nije povezana s lažno sniženim brojem trombocita?',
          answers: [
            'ugrušak',
            'dostavljanje uzorka na sobnoj temperaturi',
            'nehomogenost uzorka',
            'razrjeđenje uzorka'
          ],
          correctAnswer: 'dostavljanje uzorka na sobnoj temperaturi'
        },
        {
          question: 'Osim provjere prisutnosti ugruška, što još moramo obavezno učiniti kod sumnje na lažno snižen broj trombocita?',
          answers: [
            'zagrijavati uzorak 1 sat te ponoviti analizu',
            'centrifugirati uzorak na 2000g i odvojiti plazmu',
            'pregledom razmaza periferne krvi provjeriti postoje li nakupine ili satelitizam trombocita',
            'provjeriti rezultate s koagulacijskog analizatora'
          ],
          correctAnswer: 'pregledom razmaza periferne krvi provjeriti postoje li nakupine ili satelitizam trombocita'
        },
        
      ],

       drugiSetPitanja : [
        {
          question: 'Na razmazu periferne krvi vidljive su:',
          answers: [
            'nakupine trombocita',
            'satelitske nakupine trombocita',
            'lizirane stanice',
            'reaktivni limfociti'
          ],
          correctAnswer: 'nakupine trombocita'
        },
        {
          question: 'Nakon što je potvrđena prisutnost nakupina trombocita, sljedeći korak je:',
          answers: [
            'uzorkovanje krvi u epruvetu s drugim antikoagulansom (Na-citratom)',
            'uzorkovanje krvi u epruvetu s aktivatorima zgrušavanja (crveni čep)',
            'izdavanje nalaza prve analize  bez komentara',
            'izdavanje nalaza prve analize uz komentar (nakupina trombocita)'
          ],
          correctAnswer: 'uzorkovanje krvi u epruvetu s drugim antikoagulansom (Na-citratom)'
        },
        
      ],

       treciSetPitanja : [
        {
          question: 'Broj trombocita u epruveti s Na-citratom treba pomnožiti s 1,1 zbog:',
          answers: [
            'interfernecije Na-citrata s impendacijskim brojanjem trombocita',
            'interferencije Na-citrata s optičkim brojanjem trombocita',
            'pucanja trombocita zbog prisustva Na-citrata',
            'efekta razrjeđenja tekućim antikoagulansom'
          ],
          correctAnswer: 'efekta razrjeđenja tekućim antikoagulansom'
        },
        {
          question: 'Ukoliko su nakupine trombocita prisutine i u epruveti s Na-citratom te je broj trombocita ispod donje granice referentnog intervala:',
          answers: [
            'nalaz se izdaje kao najmanji brojiv broj trombocita',
            'nalaz se izdaje bez komentara',
            'nalaz se ne izdaje uz komentar',
            'izdaje se nalaz uzorka s EDTA'
          ],
          correctAnswer: 'nalaz se ne izdaje uz komentar'
        },
        {
          question: 'Ukoliko su nakupine trombocita prisutne i u epruveti s Na-citratom te je broj trombocita unutar referentnog intervala:',
          answers: [
            'nalaz se izdaje bez komentara',
            'nalaz se izdaje kao najmanji brojiv broj trombocita',
            'izdaje se nalaz uzorka s EDTA',
            'nalaz se ne izdaje uz komentar'
          ],
          correctAnswer: 'nalaz se izdaje kao najmanji brojiv broj trombocita'
        }
        
       
      
      ],



      uris:[
        require('../images/CaseStudySlike/Picture_1.png'),
        require('../images/CaseStudySlike/Picture_1.png'),
        require('../images/CaseStudySlike/Picture_1.png'),
        require('../images/CaseStudySlike/Picture_1.png')


      ],
      potvrdne_pretrage:
      {
        Citoloski_nalaz:'Zatražen je uzorak u epruveti s Na-citratom kao antikoagulansom. Nakon ponovljene analize na tom uzorku broj trombocita je unutar referentnog intervala/ još uvijek ispod donje granice referentnog intervala. U razmazu periferne krvi više nisu vidljive/ još uvijek su vidljive nakupine trombocita. ',
    },
      dijagnoza:'EDTA-pseudotrombocitopenija'

    },


    ]


}