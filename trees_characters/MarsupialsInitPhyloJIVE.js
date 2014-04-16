    function init() {

        phylogenyExplorer_init({
        
        
// params
        	codeBase:'../..',
            width: 500,
            height:1200,        
        	alignName:false,
        	lateralise:false, 
       		levelsToShow:12,
        	branchMultiplier:2, 
        	
//  Tree and Characters 
       			tree: '((((((((((((Acrobates pygmaeus:1.0,Distoechurus pennatus:1.0):1.0,Tarsipes rostratus:2.0):2.0,(((Dactylopsila megalura:1.0,Dactylopsila palpator:1.0,Dactylopsila tatei:1.0,Dactylopsila trivirgata:1.0):1.0,Gymnobelideus leadbeateri:2.0):1.0,(Petaurus abidi:1.0,Petaurus australis:1.0,Petaurus breviceps:1.0,Petaurus gracilis:1.0,Petaurus norfolcensis:1.0):2.0):1.0):3.0,(((Hemibelideus lemuroides:1.0,Petauroides volans:1.0):4.0,(Petropseudes dahli:4.0,((Pseudochirops albertisii:2.0,(Pseudochirops archeri:1.0,Pseudochirops cupreus:1.0):1.0):1.0,Pseudochirops corinnae:3.0):1.0):1.0):1.0,((Pseudocheirus canescens:3.0,((Pseudocheirus caroli:1.0,Pseudocheirus herbertensis:1.0):1.0,Pseudocheirus forbesi:2.0):1.0,Pseudocheirus mayeri:3.0):1.0,Pseudocheirus peregrinus:4.0):2.0):1.0):4.0,(((Ailurops ursinus:8.0,(((((((Phalanger carmelitae:1.0,Phalanger vestitus:1.0):1.0,Phalanger orientalis:2.0):1.0,Phalanger sericeus:3.0):1.0,Phalanger lullulae:4.0):1.0,Phalanger pelengensis:5.0):1.0,(Strigocuscus celebensis:1.0,Strigocuscus gymnotis:1.0):5.0):1.0,(Spilocuscus maculatus:1.0,Spilocuscus rufoniger:1.0):6.0):1.0):1.0,((Phalanger matanim:1.0,Phalanger ornatus:1.0):3.0,(((Trichosurus arnhemensis:1.0,Trichosurus vulpecula:1.0):1.0,Trichosurus caninus:2.0):1.0,Wyulda squamicaudata:3.0):1.0):5.0):1.0,(Burramys parvus:3.0,(Cercartetus caudatus:2.0,(Cercartetus concinnus:1.0,Cercartetus lepidus:1.0,Cercartetus nanus:1.0):1.0):1.0):7.0):1.0):5.0,((Aepyprymnus rufescens:14.0,(Bettongia gaimardi:1.0,Bettongia lesueur:1.0,Bettongia penicillata:1.0):13.0,Caloprymnus campestris:14.0,((((Dendrolagus bennettianus:7.0,(((((Dendrolagus dorianus:1.0,Dendrolagus scottae:1.0):2.0,(Dendrolagus goodfellowi:2.0,(Dendrolagus matschiei:1.0,Dendrolagus spadix:1.0):1.0):1.0):1.0,Dendrolagus ursinus:4.0):1.0,Dendrolagus inustus:5.0):1.0,Dendrolagus lumholtzi:6.0):1.0):4.0,(((Lagorchestes asomatus:1.0,Lagorchestes conspicillatus:1.0,Lagorchestes hirsutus:1.0,Lagorchestes leporides:1.0):8.0,((((((Macropus agilis:1.0,Macropus eugenii:1.0):1.0,(Macropus dorsalis:1.0,Macropus parma:1.0):1.0,(Macropus greyi:1.0,Macropus irma:1.0):1.0,(Macropus parryi:1.0,Macropus rufogriseus:1.0):1.0):3.0,((((Macropus antilopinus:1.0,Macropus rufus:1.0):1.0,Macropus robustus:2.0):1.0,Macropus bernardus:3.0):1.0,(Macropus fuliginosus:1.0,Macropus giganteus:1.0):3.0):1.0):1.0,Wallabia bicolor:6.0):1.0,((Onychogalea fraenata:1.0,Onychogalea lunata:1.0):1.0,Onychogalea unguifera:2.0):5.0):1.0,Setonix brachyurus:8.0):1.0):1.0,(((((Petrogale assimilis:1.0,Petrogale godmani:1.0):1.0,Petrogale inornata:2.0,Petrogale penicillata:2.0):1.0,Petrogale lateralis:3.0,Petrogale persephone:3.0,Petrogale rothschildi:3.0,Petrogale xanthopus:3.0):1.0,(Petrogale brachyotis:2.0,(Petrogale burbidgei:1.0,Petrogale concinna:1.0):1.0):2.0):1.0,(Thylogale billardierii:3.0,(Thylogale brunii:2.0,(Thylogale stigmatica:1.0,Thylogale thetis:1.0):1.0):1.0):2.0):5.0):1.0):1.0,((Dorcopsis atrata:1.0,Dorcopsis hageni:1.0,Dorcopsis luctuosa:1.0,Dorcopsis muelleri:1.0):1.0,(Dorcopsulus macleayi:1.0,Dorcopsulus vanheurni:1.0):1.0):10.0):1.0,Lagostrophus fasciatus:13.0):1.0,(Potorous longipes:1.0,Potorous platyops:1.0,Potorous tridactylus:1.0):13.0):1.0,Hypsiprymnodon moschatus:15.0):1.0):1.0,(((Lasiorhinus krefftii:1.0,Lasiorhinus latifrons:1.0):1.0,Vombatus ursinus:2.0):1.0,Phascolarctos cinereus:3.0):14.0):1.0,Dromiciops gliroides:18.0):1.0,((((((((((((Antechinus bellus:1.0,Antechinus flavipes:1.0):1.0,Antechinus leo:2.0):1.0,Antechinus stuartii:3.0):1.0,Antechinus godmani:4.0):1.0,(Antechinus minimus:1.0,Antechinus swainsonii:1.0):4.0):1.0,((Antechinus melanurus:2.0,(Antechinus naso:1.0,Murexia longicaudata:1.0):1.0):1.0,Antechinus wilhelmina:3.0,Murexia rothschildi:3.0):3.0):1.0,(Phascogale calura:1.0,Phascogale tapoatafa:1.0):6.0):4.0,(((Dasycercus byrnei:1.0,Dasycercus cristicauda:1.0):8.0,(((((((Dasyurus albopunctatus:2.0,(Dasyurus geoffroii:1.0,Dasyurus spartacus:1.0):1.0):1.0,Dasyurus viverrinus:3.0):1.0,Dasyurus maculatus:4.0):1.0,Dasyurus hallucatus:5.0):1.0,Sarcophilus laniarius:6.0):1.0,(Neophascogale lorentzi:2.0,(Phascolosorex doriae:1.0,Phascolosorex dorsalis:1.0):1.0):5.0):1.0,Parantechinus bilarni:8.0):1.0,(Pseudantechinus macdonnellensis:1.0,Pseudantechinus woolleyae:1.0):8.0):1.0,(Dasykaluta rosamondae:1.0,Parantechinus apicalis:1.0):9.0,(Myoictis melas:1.0,Pseudantechinus ningbing:1.0):9.0):1.0):1.0,(((((Ningaui ridei:1.0,Ningaui yvonnae:1.0):1.0,Ningaui timealeyi:2.0):7.0,(((Sminthopsis aitkeni:1.0,Sminthopsis griseoventer:1.0):6.0,((((Sminthopsis archeri:2.0,(Sminthopsis dolichura:1.0,Sminthopsis gilberti:1.0,Sminthopsis leucopus:1.0,Sminthopsis murina:1.0):1.0):2.0,(Sminthopsis hirtipes:3.0,((Sminthopsis ooldea:1.0,Sminthopsis youngsoni:1.0):1.0,Sminthopsis psammophila:2.0):1.0):1.0):1.0,Sminthopsis longicaudata:5.0):1.0,Sminthopsis granulipes:6.0):1.0):1.0,((((Sminthopsis butleri:1.0,Sminthopsis douglasi:1.0):1.0,Sminthopsis virginiae:2.0):1.0,Sminthopsis macroura:3.0):1.0,Sminthopsis crassicaudata:4.0):4.0):1.0):1.0,Sminthopsis laniger:10.0):1.0,(((Planigale gilesi:1.0,Planigale ingrami:1.0,Planigale novaeguineae:1.0):1.0,Planigale tenuirostris:2.0):1.0,Planigale maculata:3.0):8.0):1.0):1.0,Myrmecobius fasciatus:13.0):1.0,Thylacinus cynocephalus:14.0):1.0,(Notoryctes caurinus:1.0,Notoryctes typhlops:1.0):14.0):4.0):1.0,(Chaeropus ecaudatus:6.0,((((Echymipera clara:1.0,Echymipera davidi:1.0,Echymipera echinista:1.0,Echymipera kalubu:1.0,Echymipera rufescens:1.0):1.0,Microperoryctes longicauda:2.0,Microperoryctes murina:2.0,Microperoryctes papuensis:2.0,(Peroryctes broadbenti:1.0,Peroryctes raffrayana:1.0):1.0,Rhynchomeles prattorum:2.0):2.0,(((Isoodon auratus:1.0,Isoodon obesulus:1.0):1.0,Isoodon macrourus:2.0):1.0,Perameles bougainville:3.0,(Perameles gunnii:1.0,Perameles nasuta:1.0):2.0):1.0):1.0,(Macrotis lagotis:1.0,Macrotis leucura:1.0):4.0):1.0):14.0):1.0,((Caenolestes caniventer:1.0,Caenolestes convelatus:1.0,Caenolestes fuliginosus:1.0):1.0,Lestoros inca:2.0,Rhyncholestes raphanurus:2.0):19.0):1.0,((((Caluromys derbianus:1.0,Caluromys lanatus:1.0,Caluromys philander:1.0):1.0,Caluromysiops irrupta:2.0):1.0,Glironia venusta:3.0):7.0,((((Chironectes minimus:6.0,((((Didelphis albiventris:2.0,(Didelphis aurita:1.0,Didelphis marsupialis:1.0):1.0):1.0,Didelphis virginiana:3.0):1.0,(Philander andersoni:1.0,Philander opossum:1.0):3.0):1.0,Lutreolina crassicaudata:5.0):1.0):1.0,Metachirus nudicaudatus:7.0):1.0,((((Gracilinanus aceramarcae:2.0,(Gracilinanus agilis:1.0,Gracilinanus microtarsus:1.0):1.0,Gracilinanus emiliae:2.0,Gracilinanus marica:2.0):1.0,Gracilinanus dryas:3.0):1.0,(Marmosops cracens:2.0,Marmosops dorothea:2.0,(Marmosops fuscatus:1.0,Marmosops parvidens:1.0):1.0,Marmosops handleyi:2.0,Marmosops impavidus:2.0,Marmosops incanus:2.0,Marmosops invictus:2.0,Marmosops noctivagus:2.0):2.0):1.0,(Lestodelphys halli:3.0,((Thylamys elegans:1.0,Thylamys pallidior:1.0):1.0,(Thylamys macrura:1.0,Thylamys pusilla:1.0):1.0):1.0):2.0):3.0):1.0,((Marmosa andersoni:2.0,Marmosa canescens:2.0,Marmosa lepida:2.0,Marmosa mexicana:2.0,Marmosa murina:2.0,Marmosa robinsoni:2.0,Marmosa rubra:2.0,Marmosa tyleriana:2.0,Marmosa xerophila:2.0,(Micoureus alstoni:1.0,Micoureus constantiae:1.0,Micoureus demerarae:1.0,Micoureus regina:1.0):1.0):1.0,(Monodelphis adusta:1.0,Monodelphis americana:1.0,Monodelphis brevicaudata:1.0,Monodelphis dimidiata:1.0,Monodelphis domestica:1.0,Monodelphis emiliae:1.0,Monodelphis iheringi:1.0,Monodelphis kunsi:1.0,Monodelphis maraxina:1.0,Monodelphis osgoodi:1.0,Monodelphis rubida:1.0,Monodelphis scalops:1.0,Monodelphis sorex:1.0,Monodelphis theresa:1.0,Monodelphis unistriata:1.0):2.0):6.0):1.0):12.0);',
            	character: {},     	
     
        	
            presentClade: function (clade) {
            var tmpl = st.config.tmpl, nodeList = [], node,  split, SpatialPortal;
  
              var html = '', names = [], formattedNames = [], output = [], header = [' ','links',' ',' ', ' ', ' '], temp, link;
              
              output.push ( header );
				  
                for (var i = 0; ((i < clade.length) & (i < 30)); i++) {
             		  (function  ( index ) {
                                 var node = clade[i], sampleid, result, rel, LSID, genus,  species, genus_plus_species;

                                 temp = [];  
                                 Taxon = node.name.match(/[^\d]*/); 
                                 genus_plus_species = Taxon[0].replace(/\s+/g,'+');
                                
                                                  
                            	$.ajax({type: 'GET',
					 			url:'http://bie.ala.org.au/ws/guid/'+genus_plus_species ,
								 		success:  function(data) {   LSID = data[0].identifier;   } }  );  
                                
                                 // ALA Spatial portal 
                                 result = Taxon ?  '<a class="thumbImage1" rel="' +Taxon[0]+i+ '"' +
                                 		  'title= "ALA LSID density map (given sufficient samples)"' + 
                                          ' href= "http://biocache.ala.org.au/ws/density/map?q=' + LSID + '"' +
                                          ' "rel="' +Taxon[0]+i+ '" ' + 'class="thumbImage1"><id="thumb1"><div class="forward"></div> </id="thumb1"></a>': ' ';
                                     
                                temp.push ( result ); 
                   				
                   			
                   				
                   
                                // bie species page
                                  result = Taxon ? '<a class="thumbImage1" rel="' +Taxon[0]+i+ '"' +
                                        'title="ALA page"' + 
                                        ' href="http://bie.ala.org.au/species/' + genus_plus_species + '">' +Taxon[0]+'</a>': ' ';
                                 temp.push ( result ); 
								 
					
                                 // NSL - australian national species list
                                  result = Taxon ?  '<a class="thumbImage1" rel="' +Taxon[0]+i+ '"' +
                                 		  'title= "NSL nomenclator "' + 
                                          ' href="http://biodiversity.org.au/name/' +genus_plus_species+ '"' +
                                          ' "rel="' +Taxon[0]+i+ '" ' + 'class="thumbImage1"><id="thumb1"><div class="forward"></div> </id="thumb1"></a>': ' ';
                        
                                 temp.push ( result ); 
      											   
							 output.push ( temp );
                               })( i );    

                 			}  //for
  				result = '';
                result = '<tr><th>' + output[0].join ( '</th><th>' ) + '</th></tr>';
                    for ( i = 1; i < output.length ; i++ ) {
                               result += '<tr><td>' + output[i].join ( '</td><td>' ) + '</td></tr>';
                             }
                // send taxa to the ALA spatial portal           
                SpatialPortal = '<a  title="ALA page" href="http://spatial.ala.org.au/?';
    
                var Colours= new Array( "0x109618","0x316395","0x329262","0x651067","0x990099","0x994499","0x3366CC",
										"0xDC3912","0xFF9900","0x0099C6","0xDD4477","0x66AA00","0xB82E2E","0x22AA99","0x6633CC","0x8B0707","0x5574A6","0x3B3EAC","0xB77322","0x16D620","0xB91383","0xF43595","0x9C5935");
			 for (var j = 0; ((j < clade.length) & (j < 15)); j++) 
			 	  { var nd = clade[j];
			 	    var Tx = nd.name; 
			 	    var ix = j + 1;
			 	  if (j > 0) { SpatialPortal = SpatialPortal + "&"; }; 
			 	  SpatialPortal = SpatialPortal + 'ly.'+ ix + '=' + Tx + '&ly.' + ix +'.s=' + Colours[j] + '&ly.' + ix + '.q=' + Tx;
			 	  };
			SpatialPortal = SpatialPortal + '">view in ALA Spatial portal</a>';
       
                return '<table>'+result+'</table>' + '>>' + SpatialPortal + '<<';
                
            }, //presentClade 
            
            onPresentClade:function ( ) {
                		  $('.thumbImage1').colorbox({iframe:true,width:'70%',height:'70%'});
           			},  // onPresentClade
          
          	 Tips:{
			enable:true,
			onShow:function( div, node){
			var url ='',   key, i , char,
				html ='',name ='', maptitle='',  index;
				if (!!node.name) {     
                                               
					url = url + '<img class="tipImage" src="http://biocache.ala.org.au/ws/density/map?q='+ node.name.replace(' ','+')+'"/>';
					maptitle = '<br/>ALA <strong>reported</strong> occurrences';
					name = '<i>'+node.name + '</i>';
					  }
				else { name = '  unnamed clade ';
					 }
				name = name + '<strong> click</strong> for ';
			if ( node.data.leaf ) { // end taxon
				  name = name + 'for linked data'; 	  
			} else { //clade 		    
				  name = 'Part of ' + name; 
				   if (node.length < 30) {
						   name = name + 'clade members'; }
					  else {
						   name = name + '30 clade members'; }
					}  
				name =  '<h3>'+ name + '</h3>';
				// display all characters
				var result = [] ;
				for ( index in st.config.selectedCharacters ) {
					key = st.config.selectedCharacters [ index ];
					char = node.data.character [ key ];
					html = '<strong>' + key + '</strong>: ';
					if ( typeof char === 'undefined' || char.length === 0 || typeof char[0] === 'undefined' ){
					  html += '&mdash;';
					} else if ( typeof char[0] !== 'number') {
					  html += char.join ( ',<br/>....' );
					} else {
					  html += char[0].toFixed ( 4 );
					}
					result.push ( html );
				}
				div.innerHTML = name + result.join ( '<br/>' ) + maptitle + url ;
			  }
			} //tips 
		 
		  
        });
        //testcase();
    } 
 
	
 