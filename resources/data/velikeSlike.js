export default {


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

        'Bazofil' ,   'Eozinofil' , 'Limfocit' , 'Metamijelocit', 'Mijelocit',  'Monocit' , 'Nesegmentirani_granulocit' , 'Plazma_stanice', 'Promijelocit',
        'Segmentirani_granulocit'
    ] ,

    //Change to real values and uris
    Akutna_mijeloična_leukemija: [
        {
        uri:require('../images/VelikeSlike/test2.2-min.jpeg'),

        answers: {
            'BAZO': 0, 'BLAST' : 96, 'EOZ': 0, 'LIMF': 4, 'META' : 0 , 'MIJELO': 0, 'MONO': 0, 'N.SEG': 0, 'PROMI':0, 'SEG': 0 
        } 


        },


        {
        uri:require('../images/VelikeSlike/aml2final-edited-min.jpg'),
        answers: {
            'BAZO': 0, 'BLAST' : 87, 'EOZ': 0, 'LIMF': 1, 'META' : 0 , 'MIJELO': 0, 'MONO': 2, 'N.SEG': 1, 'PROMI':0, 'SEG': 0 
        }
        } ,


        {
        uri:require('../images/VelikeSlike/aml3final-edited-min.jpg'),
        answers: {
            'BAZO': 0, 'BLAST' : 95, 'EOZ': 0, 'LIMF': 0, 'META' : 0 , 'MIJELO': 0, 'MONO': 0, 'N.SEG': 1, 'PROMI':0, 'SEG': 2 
        }
        } ,

        {
        uri:require('../images/VelikeSlike/aml4final-edited-min.jpg'),
        answers: {
            'BAZO': 0, 'BLAST' : 91, 'EOZ': 0, 'LIMF': 1, 'META' : 0 , 'MIJELO': 0, 'MONO': 4, 'N.SEG': 1, 'PROMI':0, 'SEG': 2 
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
                'BAZO': 3, 'BLAST' : 4, 'EOZ': 2, 'LIMF': 4, 'META' : 6 , 'MIJELO': 17, 'MONO': 1, 'N.SEG': 2, 'PROMI':3, 'SEG': 58 
            }
            }

        


    ] ,


    Kronična_limfocitna_leukemija: [
            {
            //KLL1
            uri:require('../images/VelikeSlike/kllfinal1-edited-min.jpg'),
    
            answers: {
                'BAZO': 0, 'BLAST' : 0, 'EOZ': 0, 'LIMF': 93, 'META' : 0 , 'MIJELO': 0, 'MONO': 1, 'N.SEG': 0, 'PROMI':0, 'SEG': 1 
                    } 
    
    
            },
    
    
            {
            //KLL2
            uri:require('../images/VelikeSlike/kllfinal2-edited-min.jpg'),
            answers: {
                'BAZO': 0, 'BLAST' : 0, 'EOZ': 0, 'LIMF': 82, 'META' : 0 , 'MIJELO': 0, 'MONO': 0, 'N.SEG': 0, 'PROMI':0, 'SEG': 0 
                    }
            } ,

            {
            //KLL3    
            uri:require('../images/VelikeSlike/kllfinal3-edited-min.jpg'),
            answers: {
                'BAZO': 0, 'BLAST' : 0, 'EOZ': 0, 'LIMF': 97, 'META' : 0 , 'MIJELO': 0, 'MONO': 3, 'N.SEG': 0, 'PROMI':0, 'SEG': 0 
                    }
            } ,


    ] ,

    Multiplu_mijelom: [
        {
        //MM1    
        uri:require('../images/VelikeSlike/mm1final-min.jpg'),

        answers: {
            'BAZO':0 , 'EOZ':1 ,'LIMF': 7, 'META':0 , 'MIJELO':0 , 'MONO':5 , 'N.SEG':0 , 'PLAZMA':7 , 'PROMI':0 , 'SEG':13 
                } 


        },



    ] ,







}