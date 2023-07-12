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


    Akutna_mijeloična_leukemija: [
        {
        uri:require('../images/VelikeSlike/test2.2-min.jpeg'),

        answers: {
            'BAZO': 2, 'BLAST' : 7, 'EOZ': 1, 'LIMF': 5, 'META' : 2 , 'MIJELO': 8, 'MONO': 0, 'N.SEG': 3, 'PROMI':4, 'SEG': 68 
        } 


        },


        {
        uri:require('../images/VelikeSlike/kml1-min.jpg'),
        answers: {
            'BAZO': 3, 'BLAST' : 4, 'EOZ': 2, 'LIMF': 4, 'META' : 6 , 'MIJELO': 17, 'MONO': 1, 'N.SEG': 2, 'PROMI':3, 'SEG': 58 
        }
        }

        


    ]



}