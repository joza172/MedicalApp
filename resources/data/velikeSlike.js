export default {

    klase : [
        'Akutna_mijeloična_leukemija' , 'Kronična_mijeloična_leukemija','Kronična_limfocitna_leukemija','Multipli_mijelom', 'Infektivna_mononukleoza'
    ],


    options1 : [ 

        'BAZO' ,'BLAST', 'EOZ','LIMF', 'META' , 'MIJELO', 'MONO', 'N.SEG', 'PROMI', 'SEG' 
    ],

    realValues1 : [

        'Bazofil' , 'Blast',  'Eozinofil' , 'Limfocit' , 'Metamijelocit', 'Mijelocit',  'Monocit' , 'Nesegmentirani_granulocit' , 'Promijelocit',
        'Segmentirani_granulocit'
    ] ,

    options2 : [ 

        'BAZO' , 'EOZ','LIMF', 'META' , 'MIJELO', 'MONO', 'N.SEG', 'PLAZMA', 'PROMI', 'SEG' 
    ],

    realValues2 : [

        'Bazofil' , 'Eozinofil' , 'Limfocit' , 'Metamijelocit', 'Mijelocit',  'Monocit' , 'Nesegmentirani_granulocit' , 'Plazma_stanice', 'Promijelocit',
        'Segmentirani_granulocit'
    ] ,

    options3 : [ 

        'BAZO' , 'BLAST','EOZ','LIMF',  'MONO', 'R.LIMF', 'SEG' 
    ],

    realValues3 : [

        'Bazofil' , 'Blast',  'Eozinofil' ,'Limfocit' ,  'Monocit' , 'Reaktivni_limfocit', 
        'Segmentirani_granulocit'
    ] ,




    Akutna_mijeloična_leukemija: [
        {
        uri:require('../images/VelikeSlike/aml1final-edited-min.jpg'),

        answers: {
            'BAZO': 0, 'BLAST' : 60, 'EOZ': 0, 'LIMF': 5, 'META' : 0 , 'MIJELO': 0, 'MONO': 23, 'N.SEG': 0, 'PROMI':0, 'SEG': 0 
        } 


        },


        {
        uri:require('../images/VelikeSlike/aml2final-edited-min.jpg'),
        answers: {
            'BAZO': 0, 'BLAST' : 60, 'EOZ': 0, 'LIMF': 0, 'META' : 0 , 'MIJELO': 0, 'MONO': 17, 'N.SEG': 1, 'PROMI':0, 'SEG': 1 
        }
        } ,


        {
        uri:require('../images/VelikeSlike/aml3final-edited-min.jpg'),
        answers: {
            'BAZO': 0, 'BLAST' : 79, 'EOZ': 0, 'LIMF': 1, 'META' : 0 , 'MIJELO': 0, 'MONO': 16, 'N.SEG': 1, 'PROMI':0, 'SEG': 2 
        }
        } ,

        {
        uri:require('../images/VelikeSlike/aml4final-edited-min.jpg'),
        answers: {
            'BAZO': 0, 'BLAST' : 81, 'EOZ': 0, 'LIMF': 1, 'META' : 0 , 'MIJELO': 0, 'MONO': 29, 'N.SEG': 0, 'PROMI':0, 'SEG': 2 
                }
        }


    ] ,

    
    Kronična_mijeloična_leukemija: [
        {   //KML1
            uri:require('../images/VelikeSlike/kllfinal1-edited-min.jpg'),
    
            answers: {
                'BAZO': 7, 'BLAST' : 4, 'EOZ': 2, 'LIMF': 3, 'META' : 6 , 'MIJELO': 18, 'MONO': 0, 'N.SEG': 7, 'PROMI':2, 'SEG': 50 
            } 
    
    
            },
    
    
            {
            //KML3
            uri:require('../images/VelikeSlike/kml3final-edited-min.jpg'),
            answers: {
                'BAZO': 3, 'BLAST' : 10, 'EOZ': 2, 'LIMF': 7, 'META' : 0 , 'MIJELO': 14, 'MONO': 0, 'N.SEG': 16, 'PROMI':0, 'SEG': 66 
            }
            },

            {   //KML4
                uri:require('../images/VelikeSlike/kmlfinal4-edited-min.jpg'),
        
                answers: {
                    'BAZO': 4, 'BLAST' : 0, 'EOZ': 2, 'LIMF': 1, 'META' : 15 , 'MIJELO': 25, 'MONO': 0, 'N.SEG': 17, 'PROMI':2, 'SEG': 39 
                } 
        
        
                },

        


    ] ,


    Kronična_limfocitna_leukemija: [
            {
            //KLL1
            uri:require('../images/VelikeSlike/kllfinal1-edited-min.jpg'),
    
            answers: {
                'BAZO': 0, 'BLAST' : 0, 'EOZ': 0, 'LIMF': 93, 'META' : 0 , 'MIJELO': 0, 'MONO': 1, 'N.SEG': 1, 'PROMI':0, 'SEG': 4 
                    } 
    
    
            },
    
    
            {
            //KLL2
            uri:require('../images/VelikeSlike/kllfinal2-edited-min.jpg'),
            answers: {
                'BAZO': 0, 'BLAST' : 0, 'EOZ': 0, 'LIMF': 98, 'META' : 0 , 'MIJELO': 0, 'MONO': 1, 'N.SEG': 0, 'PROMI':0, 'SEG': 1 
                    }
            } ,

            {
            //KLL3    
            uri:require('../images/VelikeSlike/kllfinal3-edited-min.jpg'),
            answers: {
                'BAZO': 0, 'BLAST' : 0, 'EOZ': 0, 'LIMF': 96, 'META' : 0 , 'MIJELO': 0, 'MONO': 2, 'N.SEG': 0, 'PROMI':0, 'SEG': 3
                    }
            } ,


    ] ,

    Multipli_mijelom: [
        {
        //MM1    
        uri:require('../images/VelikeSlike/mm1final-min.jpg'),

        answers: {
            'BAZO':0 , 'EOZ':1 ,'LIMF': 12, 'META':0 , 'MIJELO':0 , 'MONO':4 , 'N.SEG':0 , 'PLAZMA':4 , 'PROMI':0 , 'SEG':13 
                } 


        },



    ] ,

    Anizocitoza:[
        //Anacitoza1
        {
            uri:require('../images/VelikeSlike/anizocitoza1.jpg'),
            answers: {
                'BAZO': 0, 'BLAST' : 60, 'EOZ': 0, 'LIMF': 5, 'META' : 0 , 'MIJELO': 0, 'MONO': 23, 'N.SEG': 0, 'PROMI':0, 'SEG': 0 
            } 
        },

        //Anacitoza2
        {
            uri:require('../images/VelikeSlike/anizocitoza2.jpg'),
            answers: {
                'BAZO': 0, 'BLAST' : 60, 'EOZ': 0, 'LIMF': 5, 'META' : 0 , 'MIJELO': 0, 'MONO': 23, 'N.SEG': 0, 'PROMI':0, 'SEG': 0 
            } 
        },

        //Anacitoza3
        {
            uri:require('../images/VelikeSlike/anizocitoza3.jpg'),
            answers: {
                'BAZO': 0, 'BLAST' : 60, 'EOZ': 0, 'LIMF': 5, 'META' : 0 , 'MIJELO': 0, 'MONO': 23, 'N.SEG': 0, 'PROMI':0, 'SEG': 0 
            } 
        },

        //Anacitoza4
        {
            uri:require('../images/VelikeSlike/anizocitoza4.jpg'),
            answers: {
                'BAZO': 0, 'BLAST' : 60, 'EOZ': 0, 'LIMF': 5, 'META' : 0 , 'MIJELO': 0, 'MONO': 23, 'N.SEG': 0, 'PROMI':0, 'SEG': 0 
            } 
        },

    ],

    Beta_talasemija:[

        //Beta_talasemija1
        {
            uri:require('../images/VelikeSlike/Beta-talasemija1.jpg'),
            answers: {
                'BAZO': 0, 'BLAST' : 60, 'EOZ': 0, 'LIMF': 5, 'META' : 0 , 'MIJELO': 0, 'MONO': 23, 'N.SEG': 0, 'PROMI':0, 'SEG': 0 
            } 
        },

        //Beta_talasemija2
        {
            uri:require('../images/VelikeSlike/Beta-talasemija2.jpg'),
            answers: {
                'BAZO': 0, 'BLAST' : 60, 'EOZ': 0, 'LIMF': 5, 'META' : 0 , 'MIJELO': 0, 'MONO': 23, 'N.SEG': 0, 'PROMI':0, 'SEG': 0 
            } 
        },

        //Beta_talasemija3
        {
            uri:require('../images/VelikeSlike/Beta-talasemija3.jpg'),
            answers: {
                'BAZO': 0, 'BLAST' : 60, 'EOZ': 0, 'LIMF': 5, 'META' : 0 , 'MIJELO': 0, 'MONO': 23, 'N.SEG': 0, 'PROMI':0, 'SEG': 0 
            } 
        },


    ],

    Shistociti:[

         //Shistociti1
         {
            uri:require('../images/VelikeSlike/Shistociti1.jpg'),
            answers: {
                'BAZO': 0, 'BLAST' : 60, 'EOZ': 0, 'LIMF': 5, 'META' : 0 , 'MIJELO': 0, 'MONO': 23, 'N.SEG': 0, 'PROMI':0, 'SEG': 0 
            } 
        },

         //Shistociti2
         {
            uri:require('../images/VelikeSlike/Shistociti2.jpg'),
            answers: {
                'BAZO': 0, 'BLAST' : 60, 'EOZ': 0, 'LIMF': 5, 'META' : 0 , 'MIJELO': 0, 'MONO': 23, 'N.SEG': 0, 'PROMI':0, 'SEG': 0 
            } 
        },

         //Shistociti3
         {
            uri:require('../images/VelikeSlike/Shistociti3.jpg'),
            answers: {
                'BAZO': 0, 'BLAST' : 60, 'EOZ': 0, 'LIMF': 5, 'META' : 0 , 'MIJELO': 0, 'MONO': 23, 'N.SEG': 0, 'PROMI':0, 'SEG': 0 
            } 
        },


    ],

    Fragmentirani_eritrociti :[

         //Fragmentirani1
         {
            uri:require('../images/VelikeSlike/fragmentirani1.jpg'),
            answers: {
                'BAZO': 0, 'BLAST' : 60, 'EOZ': 0, 'LIMF': 5, 'META' : 0 , 'MIJELO': 0, 'MONO': 23, 'N.SEG': 0, 'PROMI':0, 'SEG': 0 
            } 
        },


    ],

    Sideropenija: [

          //Sideropenija1
          {
            uri:require('../images/VelikeSlike/sideropenija1.jpg'),
            answers: {
                'BAZO': 0, 'BLAST' : 60, 'EOZ': 0, 'LIMF': 5, 'META' : 0 , 'MIJELO': 0, 'MONO': 23, 'N.SEG': 0, 'PROMI':0, 'SEG': 0 
            } 
        },

          //Sideropenija2
          {
            uri:require('../images/VelikeSlike/sideropenija2.jpg'),
            answers: {
                'BAZO': 0, 'BLAST' : 60, 'EOZ': 0, 'LIMF': 5, 'META' : 0 , 'MIJELO': 0, 'MONO': 23, 'N.SEG': 0, 'PROMI':0, 'SEG': 0 
            } 
        },

          //Sideropenija3
          {
            uri:require('../images/VelikeSlike/sideropenija3.jpg'),
            answers: {
                'BAZO': 0, 'BLAST' : 60, 'EOZ': 0, 'LIMF': 5, 'META' : 0 , 'MIJELO': 0, 'MONO': 23, 'N.SEG': 0, 'PROMI':0, 'SEG': 0 
            } 
        },


    ],

    Infektivna_mononukleoza: [

        {
            uri:require('../images/VelikeSlike/mono-dodano-editano.jpg'),

            answers: {
                'BAZO' : 1 , 'BLAST' : 1 ,'EOZ' : 2, 'LIMF' : 15,  'MONO' : 0, 'R.LIMF' : 17, 'SEG' : 19
            } 
        },

    ]

    







}