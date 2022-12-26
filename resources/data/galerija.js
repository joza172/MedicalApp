export default {

    
    'Eritrocitopoeza' : [
        {class: 'Proeritroblast',
        opcenito : 'Blastnu fazu mijelopoeze, eritropoeze, limfopoeze i monopoeze ne možemo razlikovati na temelju pregleda razmaza periferne krvi.',
        jezgra : 'Jezgra zauzima veći dio stanice. Nezrelog je kromatina s nekoliko zrnatih nukleola.',
        citoplazma: 'Citoplazma je izrazito bazofilna zbog velike količine RNA.'},

        {class:'Bazofilni_eritroblast',
        opcento:'Sljedeći razvojni stadij nakon proeritroblasta, nešto manje veličine.',
        jezgra:'Jezgra je zrelija od one proeritroblasta. Okruglog je oblika. Nukleoli su teže vidljivi.',
        citoplazma: 'Karakteristična izrazito bazofilna citoplazma.'},

        {class: 'Polikromatofilni_eritroblast',
        opcenito:'Polikromatofilni eritroblast manji je od bazofilnoga te ima manji omjer jezgre i citoplazme.',
        jezgra: 'Jezgra se smanjuje zbog kontinuirane kondenzacije kromatina. Kromatin je grubo kondenziran.',
        citoplazma:'Citoplazma se puni hemoglobinom stoga se boja mijenja u svjetloplavo-ružičastu.'},

        {class:'Acidofilni_eritroblast',
        opcenito:'Acidofilni eritroblst je najmanji eritroblast s malim omjerom jezgre i citoplazme.',
        jezgra:'Jezgra acidofilnog eritroblasta je mala, okrugla i grudasta.',
        citoplazma:'Citoplazma je ružičasto sive boje.'},

        {class:'Retikulocit',
        opcenito:'Stadij kad je eritroblast odbacio jezgru. Citoplazma još sadrži određenu količinu RNA uz veliku količinu hemoglobina.',
        jezgra:'',
        citoplazma:''},

        {class:'Eritrocit',
        opcenito:'Zrela stanica crvenkaste boje bez jezgre.',
        jezgra:'',
        citoplazma:''}
                    ],

    'Granulocitopoeza' : [
        {class:'Mijeloblast',
        opcenito:'Blastnu fazu mijelopoeze, eritropoeze, limfopoeze i monopoeze ne možemo razlikovati na temelju pregleda razmaza periferne krvi. Mijeloblast veličine je od 15-18 µm.',
        jezgra:'Jezgra mijeloblasta je okrugla i ružičasta. Sadrži fino raspršeni kromatin, a vidljivo je i nekoliko nukleola.',
        citoplazma:'Citoplazma je zagasito modra.',
        slika1 : require('../images/Jpgovi-opis/Blast/1.jpg'),
        slika2: require('../images/Jpgovi-opis/Blast/2.jpg'),},

        {class:'Promijelocit',
        opcenito:'Promijelocit morfološki nalikuje mijeloblastu, ali je ipak nešto veća stanica.',
        jezgra:'Jezgra je smještena uz rub stanice. Vidljivi su nukleoli i fino raspršeni kromatin.',
        citoplazma:'Citoplazma je modra te se mogu uočiti azurofilne granule.',
        slika1:require('../images/Jpgovi-opis/Promijelocit/1.jpg'),
		    slika2:require('../images/Jpgovi-opis/Promijelocit/2.jpg'),},

        {class:'Mijelocit',
        opcenito:'Mijelociti su zreliji te manji od promijelocita.',
        jezgra:'Jezgra je smještena uz rub stanice s malim udubljenjem ili zaravnjanjem s jedne strane. Kromatin je kondenziraniji, a nukleoli nisu vidljivi.',
        citoplazma:'U citoplazmi su vidljive sekundarne granule na temelju kojih možemo raspoznati eozinofilni, bazofilni te neutrofilni mijelociti.',
        slika1:require('../images/Jpgovi-opis/Mijelocit/1.jpg'),
        slika2:require('../images/Jpgovi-opis/Mijelocit/2.jpg'),},

        {class:'Metamijelocit',
        opcenito:'Metamijelociti promjera su između 10 i 16 µm.',
        jezgra:'Jezgra je postavljena ekscentrično te je bubrežastog oblika s izraženijim udubljenjem. Kromatin je kondenziraniji, a nukleoli nisu vidljivi.',
        citoplazma:'Obilnu citoplazmu ispunjavaju primarne i sekundarne granule.',
        slika1:require('../images/Jpgovi-opis/Metamijelocit/1.jpg'),
        slika2:require('../images/Jpgovi-opis/Metamijelocit/2.jpg'),},

        {class:'Nesegmentirani_granulocit',
        opcenito:'Nesegmentirane granulocite ponekad možemo pronaći u krvi zdravih osoba. Promjer im je 10 -15 μm.  Obično su pravilnog okruglog oblika.',
        jezgra:'Nesegmentirani granulociti imaju jezgru oblika potkove. Najuži dio jezgre je veći od 1/3 najšireg dijela jezgre. Kromatin je kondenziran i boja se tamno ljubičasto obojen.',
        citoplazma:'Ružičasto obojana citoplazma ispunjena je velikim brojem ljubičasto-ružičasto obojenih granula. Granule koje vidimo u stanici predstavljaju sekundarne i tercijarne granule, dok su primarne granule neobojane.',
        slika1:require('../images/Jpgovi-opis/Nesegmentirani_granulocit/1.jpg'),
		    slika2:require('../images/Jpgovi-opis/Nesegmentirani_granulocit/2.jpg'),
        linkovi: ['Nesegmentirani_granulocit', 'Segmentirani_granulocit', 'Metamijelocit'],
		},

        {class:'Segmentirani_granulocit',
        opcenito:'Segmentirani granulociti najbrojnija skupina bijelih krvnih stanica u perifernoj krvi zdravih osoba. Promjer im je 10 -15 μm. Obično su pravilnog okruglog oblika.',
        jezgra:  'Segmentirani granulociti imaju segmentiranu jezgru koja sadrži 3 do 5 segmenata. Kromatin je kondenziran i boja se tamno ljubičasto.',
        citoplazma:' Ružičasto obojana citoplazma ispunjena je velikim brojem ljubičasto-ružičasto obojenih granula. Granule koje vidimo u stanici predstavljaju sekundarne i tercijarne granule, dok su primarne granule neobojane.U žena je moguće uočiti krajnji segment koji nazivamo Barrovo tjelešce. Barrovo tjelešce predstavlja inaktivni spolni X kromosom.',
        slika1:require('../images/Jpgovi-opis/Segmentirani_granulocit/1.jpg'),
		    slika2:require('../images/Jpgovi-opis/Segmentirani_granulocit/2.jpg'),
        linkovi: ['Nesegmentirani_granulocit', 'Segmentirani_granulocit', 'Metamijelocit'],
    },

      {class:'Bazofil',
      opcenito:'Bazofile rijetko pronalazimo u krvi zdravih osoba. Karakteristični su po svojim bazofilnim granulama koje uočavamo u citoplazmi. Bazofili su po izgledu najvarijabilnije stanice u perifernoj krvi. ',
      jezgra: 'Jezgru je često teško uočiti jer je prekrivena granulama. No ponekad možemo uočiti grubi, ljubičasto obojani kromatin.',
      citoplazma: 'Citoplazma je ispunjena ljubičastim granulama.',
      slika1:require('../images/Jpgovi-opis/Bazofil/1.jpg'),
      slika2:require('../images/Jpgovi-opis/Bazofil/2.jpg'),
      linkovi:['Bazofil'],},

      {class:'Eozinofil',
      opcenito:'U krvi zdravih osoba možemo pronaći nekoliko eozinofila. Karakteristični su po svojim tamnocrvenim granulama koje možemo jasno uočiti u citoplazmi.',
      jezgra: 'Jezgra sadrži od 2 do 3 segmenta. Kromatin je obojan lubičasto-crveno.',
      citoplazma: 'Citoplazma je ispunjena grubim tamnocrvenim granulama.',
      slika1:require('../images/Jpgovi-opis/Eozinofil/1.jpg'),
      slika2:require('../images/Jpgovi-opis/Eozinofil/2.jpg'),
      linkovi: ['Segmentirani_granulocit'],
    }

                      ],

      'Limfocitopoeza' : [
      {class:'Limfoblast',
      opcenito:'Blastnu fazu mijelopoeze, eritropoeze, limfopoeze i monopoeze ne možemo razlikovati na temelju pregleda razmaza periferne krvi. Limfoblast veličine je od 15-18 µm.',
      jezgra:'Jezgra mijeloblasta je okrugla i ružičasta. Sadrži fino raspršeni kromatin, a vidljivo je i nekoliko nukleola.',
      citoplazma:'Citoplazma je zagasito modra.',
      slika1:require('../images/Jpgovi-opis/Limfoblast/1.jpg'),
      slika2:require('../images/Jpgovi-opis/Limfoblast/BL_1210165.jpg'),},

      {class:'Limfocit',
      opcenito:'Limfociti su druge po zastupljenosti stanice koje nalazimo u krvi zdravih osoba. Volumenom mogu jako varirati, promjera 6 -15 μm. U perifernoj krvi zdravih osoba možemo uočiti male i velike granulirane limfocite.',
      jezgra:'Tamna i velika jezgra, zauzima oko 90% površine stanice. Kromatin je grubo grudast. Nukleoli su prisutni, ali teško vidljivi svjetlosnim mikroskopom.',
      citoplazma:'Citoplazma je modre boje. Često je oskudna, no ponekad može biti i veći volumen citoplazme popraćen granulama. U tim slučajevima važno je razlikovati limfocit od granulocita ili monocita.',
      slika1:require('../images/Jpgovi-opis/Limfocit/1.jpg'),
      slika2:require('../images/Jpgovi-opis/Limfocit/2.jpg'),
      linkovi: ['Limfocit', 'Reaktivni_limfocit', 'Monocit'],
    },
      
      {class:'Reaktivni_limfocit',
      opcenito:'Reaktivni limfociti pokazuju različite morfološke osobine koje uključuju povećanje veličine i smanjenje omjera jezgre i citoplazme u odnosu na normalni limfocit.',
      jezgra:'Jezgra može biti okrugla, ali je često izdužena ili rastrgana ili nepravilna. Mogu se vidjeti nukleoli. Kromatin je više raspršen i svjetliji od kromatina kod limfocita u mirovanju.',
      citoplazma:'Povećana je bazofilija citoplazme uz moguću prisutnost azurofilnih granula i /ili vakuola',
      slika1:require('../images/Jpgovi-opis/Reaktivni_limfocit/1.jpg'),
      slika2:require('../images/Jpgovi-opis/Reaktivni_limfocit/2.jpg'),
      linkovi: ['Reaktivni_limfocit', 'Limfocit', 'Monocit'],
      },

      {class:'Plazma_stanice',
      opcenito:'Plazma stanica je okrugla ili ovalna stanica veća od limfocita, iako mogu varirati u veličini.',
      jezgra:'Jezgra je položena uz rub i zauzima mali dio stanice. Kromatin je grubo kondenziran. Nukleoli nisu vidljivi.',
      citoplazma:'Citoplazma je obilna i bazofilna zbog velike sinteze protutijela. Često su vidljive brojne vakuole. U pravilu je vidljiv tzv. perinuklearni halo.',
      slika1:require('../images/Jpgovi-opis/Plazma_stanice/1.jpg'),
      slika2:require('../images/Jpgovi-opis/Plazma_stanice/2.jpg'),
    },

      {class:'Atipični_limfocit',
      opcenito:'Pojam atipičnih limfocita koristi se kako bi se opisale zapažene promjene na limfocitima. Te promjene često su tumorske i monoklonske etiologije. Atipični limfociti jednog pacijenta često su slične morfologije. Svojom morfologijom mogu nalikovati reaktivnim limfocitima zbog čega ih je teško razlikovati.',
      jezgra:'',
      citoplazma:''
      },

      {class:'Vlasasti_limfociti',
      opcenito:'Karakteristika vlasastih limfocita su vlasasti produljci membrane.',
      jezgra:'Jezgra je okrugla ili ovalna uz blaga uleknuća. Smještena je u sredini stanice.',
      citoplazma:'Citoplazma je obilna i blijedo plavkasta.',
      slika1:require('../images/Jpgovi-opis/Vlasasti_limfociti/1.jpg'),
      slika2:require('../images/Jpgovi-opis/Vlasasti_limfociti/2.jpg'),
      }
                      ], 

      'Monocitopoeza' : [
      {class:'Monoblast',
      opcenito:'Blastnu fazu mijelopoeze, eritropoeze, limfopoeze i monopoeze ne možemo razlikovati na temelju pregleda razmaza periferne krvi.',
      jezgra:'Jezgra zauzima veći dio stanice. Okrugla je ili lagano udubljena. Nukleoli su vidljivi, a kromatin je fino raspršen.',
      citoplazma:'Citoplazma je zgasito modra i agranulirana, a moguće je uočiti i vakuole.',
      slika1:require('../images/Jpgovi-opis/Blast/1.jpg'),
      slika2:require('../images/Jpgovi-opis/Blast/2.jpg'),},

      {class:'Promonocit',
      opcenito:'Promonociti su prva morfološki prepoznatlljiva nezrela stanica monocitne loze.',
      jezgra:'Jezgra promonocita zauzima veći dio stanice. Udubljena je s nezrelim, raspršenim kromatinom. Nukleoli su gotovo nevidljivi.',
      citoplazma:'Citoplazma promonocita je sivkasto plava. Ponekad se vide vakuole i nekoliko sitnih zrnaca.'},

      {class:'Monocit',
      opcenito:'Monociti su treće po zastupljenosti stanice u perifernoj krvi zdravih osoba. Najčešće su to najveće stanice koje vidimo u razmazu. Promjer im je 12 - 20 μm.',
      jezgra:'Oblik jezgre jako varira, a često je bubrežastog izgleda ili oblika potkove. Sadrži puno nabora. Nalik je na mozak ili sažvakanu gumu. Kromatin je rahli i obojan je blago ljubičasto.',
      citoplazma:'Citoplazma je obojena plavkasto-sivo i često ispunjena vakuolama.',
      slika1:require('../images/Jpgovi-opis/Monocit/1.jpg'),
      slika2:require('../images/Jpgovi-opis/Monocit/2.jpg'),
      linkovi: ['Monocit', 'Limfocit', 'Reaktivni_limfocit', 'Mijelocit', 'Metamijelocit']
    }
                      ], 

      'Megakariocitopoeza' : [
      {class:'Megakarioblast',
      opcenito:'Stanica s izrazito velikom poliploidnom jezgrom i citoplazmom s brojnim produžecima (kao da pupa) izrazito modre citoplazme.',
      jezgra:'',
      citoplazma:''
      },
      
      {class:'Megakariocit',
      opcenito:'Velika stanica s multilobuliranom jezgrom, citoplazma ružičaste boje s velikim brojem trombocita unutar citoplazme koji se na rubovima mogu odjeljivati od megakariocita.',
      jezgra:'',
      citoplazma:''
      },


      {class:'Promegakariocit',
      opcenito:'Veći od svog prethodnika s velikom režnjatom jezgrom i izrazito modre citoplazme.',
      jezgra:'',
      citoplazma:''
      }
                          ]
    
}