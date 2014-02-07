    function init() {

        phylogenyExplorer_init({

			codeBase:'../..',
            width: 550,
            height:1600,        
        	alignName:true,
        	lateralise:false, 
       		levelsToShow:8,
        	branchMultiplier:5,
            presentClade: function (clade) {
              var tmpl = st.config.tmpl,
                nodeList = [],
                node, html, split;
                for (var i = 0; ((i < clade.length) & (i < 30)); i++) {
                  node = {}
                  node.name = clade [ i ].name;
                  node.plus = clade [ i ].name.replace(/\s+/g,'+');
                  split = node.name.split( /\s+/ );
                  if ( split.length > 1 ){
                    node.genus = split [ 0 ];
                    node.species = split [ 1 ];              
                  } else {
                    node.species = split [ 0 ];
                  }
                  node.rel = node.species + '' + i;
                  node.index = i;
                  nodeList.push ( node );            
                }
              if ( tmpl ) {
                tmpl = _.template ( tmpl );
                html = tmpl ( {nodeList: nodeList});
              } else {
                
              }
              return html;

            }, //presentClade 
	       tmpl : '<table style="border: none"><tbody><tr><th></th><th>links</th><th> </th><th> </th><th> </th><th> </th></tr><% _.each(nodeList , function( value ) { %> <tr><td><a href="http://bie.ala.org.au/species/<%= value.plus %>" title="<%= value.name %> ALA species page" rel="<%= value.rel %>" class="thumbImage1"><%= value.name %></a></td><td><a href="http://biodiversity.org.au/name/<%= value.plus %>" title="about <%= value.name %> in NSL nomenclator " rel="<%= value.rel %>" class="thumbImage1"><id="thumb1"><div class="forward"></div> </id="thumb1"></a></td><td><a href="http://www.anbg.gov.au/cgi-bin/apiiGenus?genus=<%= value.genus %>&species=<%= value.species %>" title="images of <%= value.name %> in Aust. plant Image Index" rel="<%= value.rel %>" class="thumbImage1"><id="thumb1"><div class="forward"></div> </id="thumb1"></a><td><a href="http://biocache.ala.org.au/ws/density/map?q=<%= value.name %>" title="<%= value.name %> Aus density Map (if sufficient samples)" rel="<%= value.rel %>" class="thumbImage1"><id="thumb1"><div class="forward"></div></id="thumb1"></a></td></td><td><a href="http://eol.org/search/show?q=<%= value.plus %>&amp;type[]=taxon_concept&amp;type[]=image&amp;commit=Filter" title="images of <%= value.name %> in EOL" rel="<%= value.rel %>" class="thumbImage1"><id="thumb1"><div class="forward"></div> </id="thumb1"></a></td></tr> <% }); %></tbody></table></div>',

        	character: 
            {
	"abbatiana" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			1
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"abbreviata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			0.45
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			6.5
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.4
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			14.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"abrupta" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			74
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"acanthaster" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.35
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			13
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			5.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"acanthoclada subsp. acanthoclada" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			145
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			5.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"acanthoclada subsp. glaucescens" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			7.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"acellerata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.45
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			36
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"acinacea" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			1.481
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			243
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			9.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"aciphylla" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			13
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			90
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"acoma" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			19
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			22.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"acradenia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			7.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			10.7
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			237
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"acrionastes" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			125
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"acuaria" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			7.6
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			57
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			13
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"aculeatissima" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			77
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			8.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"aculeiformis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			3.25
		],
		"Phyllode_length__median" : [
			17.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"acuminata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			12
		],
		"genome_size" : [
			1.681
		],
		"seed_mass" : [
			16.6
		],
		"first_leaf__pinnae_pairs" : [
			2.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.8
		],
		"range_size" : [
			231
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			115
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"acuminata (narrow phyllode variant)" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			105
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"acuminata (small seed variant)" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			85
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"acutata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			32
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			8
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"adenogonia" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			4.5
		],
		"Phyllode_length__median" : [
			7.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"adinophylla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			5
		],
		"Pulvinus_length_median" : [
			0.5
		]
	},
	"adnata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			1.75
		],
		"Phyllode_length__median" : [
			4.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"adoxa var. adoxa" : {
		"section_taxonomy" : [
			"lycopodifolia"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			0.7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			12.3
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			153
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			3.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"adoxa var. subglabra" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			3.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"adsurgens" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			7.2
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			218
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"adunca" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			63.9
		],
		"first_leaf__pinnae_pairs" : [
			8.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			7.0
		],
		"range_size" : [
			23
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			107.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"aemula subsp. aemula" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			25
		],
		"Stipule_length_median" : [
			2.5
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"aemula subsp. muricata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			2.5
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"aestivalis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			81.3
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			29
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			85
		],
		"Pulvinus_length_median" : [
			2
		]
	},
	"affin. ancistrophylla" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"affin. baxteri" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			9
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"affin. jennerae" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			112.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"affin. microbotrya" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			85
		],
		"Pulvinus_length_median" : [
			4
		]
	},
	"affin. multispicata" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"affin. papyrocarpa" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			65
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"affin. penninervis" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"affin. quadrimarginea" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			90
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"affin. resinosa" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			35
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"affin. retinervis" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"affin. rigens" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			37.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"affin. trachycarpa" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"alata var. alata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			1.259
		],
		"seed_mass" : [
			10.3
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			86
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			12.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"alata var. biglandulosa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			22.8
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			86
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			12.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"alata var. platyptera" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			16.7
		],
		"first_leaf__pinnae_pairs" : [
			1.5
		],
		"_leaflet__pairs_2nd_leaf" : [
			1.5
		],
		"range_size" : [
			86
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"alata var. tetrantha" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"alaticaulis" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"albizioides" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"alcockii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			4
		]
	},
	"alexandri" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			3.5
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"alleniana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			24.4
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			1.9
		],
		"range_size" : [
			88
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			180
		],
		"Pulvinus_length_median" : [
			1.5
		]
	},
	"alpina" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			32
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"amanda" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			81
		],
		"Pulvinus_length_median" : [
			1.75
		]
	},
	"amblygona" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			123
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			12
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"amblyophylla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			87.2
		],
		"first_leaf__pinnae_pairs" : [
			4.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.3
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			85
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"amentifera" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"fasciculate"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			1
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			8
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ammobia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4.25
		],
		"genome_size" : [
			1.265
		],
		"seed_mass" : [
			7.0
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			21
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			177.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ammophila" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			150
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"amoena" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			12.5
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.8
		],
		"range_size" : [
			32
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			55
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ampliata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			0.5
		],
		"Phyllode_length__median" : [
			135
		],
		"Pulvinus_length_median" : [
			2.25
		]
	},
	"ampliceps" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5.5
		],
		"genome_size" : [
			1.202
		],
		"seed_mass" : [
			28.3
		],
		"first_leaf__pinnae_pairs" : [
			2.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			105
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			160
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"amputata" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			0.45
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"amyctica" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"anarthros" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			0.35
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			5
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"anasilla" : {
		"section_taxonomy" : [
			"lycopodifolia"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			1.75
		],
		"Phyllode_length__median" : [
			7.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"anastema" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			200
		],
		"Pulvinus_length_median" : [
			1
		]
	},
	"anaticeps" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			2.5
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.5
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			65
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"anceps" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			19.4
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.7
		],
		"range_size" : [
			62
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			50
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"anceps (winged variant)" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"anceps x nematophylla" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			33.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ancistrocarpa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			1.915
		],
		"seed_mass" : [
			36.6
		],
		"first_leaf__pinnae_pairs" : [
			3.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.8
		],
		"range_size" : [
			301
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ancistrocarpa x trachycarpa" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			105
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ancistrophylla var. ancistrophylla" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.55
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			126
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			17.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ancistrophylla var. lissophylla" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			31.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ancistrophylla var. perarcuata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			17.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"andrewsii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			62
		],
		"Stipule_length_median" : [
			1.25
		],
		"Phyllode_length__median" : [
			14.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"aneura" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			18
		],
		"genome_size" : [
			2.96
		],
		"seed_mass" : [
			11.3
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.3
		],
		"range_size" : [
			1384
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			62.5
		],
		"Pulvinus_length_median" : [
			1.5
		]
	},
	"aneura var. argentea" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			42.5
		],
		"Pulvinus_length_median" : [
			1.5
		]
	},
	"aneura var. conifera" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"aneura var. fuliginea" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			56
		],
		"Pulvinus_length_median" : [
			1.75
		]
	},
	"aneura var. intermedia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			70
		],
		"Pulvinus_length_median" : [
			1.25
		]
	},
	"aneura var. macrocarpa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			70
		],
		"Pulvinus_length_median" : [
			1.75
		]
	},
	"aneura var. major" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			47.5
		],
		"Pulvinus_length_median" : [
			1.25
		]
	},
	"aneura var. microcarpa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			62.5
		],
		"Pulvinus_length_median" : [
			1.5
		]
	},
	"aneura var. pilbarana" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			1.5
		]
	},
	"anfractuosa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			29
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			125
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"angusta" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			24
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			145
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"angustissima" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"paniculate"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"anomala" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.325
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			3.2
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			2.85
		],
		"Phyllode_length__median" : [
			70
		],
		"Pulvinus_length_median" : [
			0.75
		]
	},
	"anthochaera" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			18.0
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.2
		],
		"range_size" : [
			31
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"aphanoclada" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			27.9
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.2
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			3.25
		],
		"Phyllode_length__median" : [
			325
		],
		"Pulvinus_length_median" : [
			2
		]
	},
	"aphylla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			2.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			16.1
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.2
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"applanata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			10.2
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			54
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			3.25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"aprepta" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			45
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"aprica" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"aptaneura" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			2.961
		],
		"seed_mass" : [
			12.1
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			82.5
		],
		"Pulvinus_length_median" : [
			1.25
		]
	},
	"arafurica" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"araneosa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			265
		],
		"Pulvinus_length_median" : [
			3
		]
	},
	"arbiana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			12
		],
		"Pulvinus_length_median" : [
			0.5
		]
	},
	"arcuatilis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			12
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"areolata" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"argutifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.35
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			1.75
		],
		"Phyllode_length__median" : [
			9.5
		],
		"Pulvinus_length_median" : [
			0.5
		]
	},
	"argyraea" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			25.7
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.1
		],
		"range_size" : [
			66
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"argyrodendron" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			16.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			35
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			125
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"argyrophylla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			1.507
		],
		"seed_mass" : [
			16.7
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.6
		],
		"range_size" : [
			48
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			37.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"argyrotricha" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			125
		],
		"Pulvinus_length_median" : [
			1
		]
	},
	"arida" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			7.9
		],
		"first_leaf__pinnae_pairs" : [
			2.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.9
		],
		"range_size" : [
			47
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			62.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"aristulata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			2.5
		],
		"Phyllode_length__median" : [
			8.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"armillata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			8
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			112.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"armitii" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			7.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.1
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			114
		],
		"Pulvinus_length_median" : [
			3.75
		]
	},
	"arrecta" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.8
		],
		"range_size" : [
			19
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			29
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ascendens" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.8
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"asepala" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.5
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			0.2
		],
		"Phyllode_length__median" : [
			17.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ashbyae" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			55
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"asparagoides" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			14
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"aspera" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.25
		],
		"genome_size" : [
			1.754
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			55
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"aspera (Brisbane Ra. variant)" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			8
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"asperulacea" : {
		"section_taxonomy" : [
			"lycopodifolia"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			69
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			6.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"assimilis subsp. assimilis" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			177
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			72.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"assimilis subsp. atroviridis" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			110
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ataxiphylla subsp. ataxiphylla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			2.5
		],
		"Phyllode_length__median" : [
			27.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ataxiphylla subsp. magna" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			2.5
		],
		"Phyllode_length__median" : [
			50
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"atkinsiana" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			8.2
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			28
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			102.5
		],
		"Pulvinus_length_median" : [
			4
		]
	},
	"atopa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			0.75
		]
	},
	"atrox" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"attenuata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			16
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"aulacocarpa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			13.6
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			106
		],
		"Stipule_length_median" : [
			6
		],
		"Phyllode_length__median" : [
			87.5
		],
		"Pulvinus_length_median" : [
			7
		]
	},
	"aulacophylla" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			21
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			97.5
		],
		"Pulvinus_length_median" : [
			3
		]
	},
	"auratiflora" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.65
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			1.25
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			0.75
		]
	},
	"aureocrinita" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			12.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"auricoma" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			28.3
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			1.25
		],
		"Phyllode_length__median" : [
			65
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"auriculiformis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			35
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			18.4
		],
		"first_leaf__pinnae_pairs" : [
			4.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			162
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			150
		],
		"Pulvinus_length_median" : [
			4
		]
	},
	"auripila" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"auronitens" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.35
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			26
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			14.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ausfeldii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			24
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"awestoniana" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			22.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"axillaris" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ayersiana" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			2.936
		],
		"seed_mass" : [
			13.4
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.5
		],
		"range_size" : [
			145
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			62.5
		],
		"Pulvinus_length_median" : [
			2.5
		]
	},
	"baeuerlenii" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			19
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			107.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"baileyana" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			117
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"bakeri" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			40
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			25
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			85
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"balsamea" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			22
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			105
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"bancroftii" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"bancroftiorum" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			45.7
		],
		"first_leaf__pinnae_pairs" : [
			4.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.3
		],
		"range_size" : [
			113
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			155
		],
		"Pulvinus_length_median" : [
			8.5
		]
	},
	"barakulensis" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			0.45
		],
		"Phyllode_length__median" : [
			16
		],
		"Pulvinus_length_median" : [
			0.75
		]
	},
	"barattensis" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"barbinervis subsp. barbinervis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			27
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"barbinervis subsp. borealis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			0.75
		]
	},
	"barrettiorum" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"barringtonensis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			13
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"bartleana" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"basedowii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			39
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			12.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"baueri subsp. aspera" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered"
		],
		"plant_height" : [
			0.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			37
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			11
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"baueri subsp. baueri" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			11
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"baxteri" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.45
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			22.5
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			2
		],
		"Phyllode_length__median" : [
			17.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"beadleana" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			7.25
		],
		"Pulvinus_length_median" : [
			0.35
		]
	},
	"beauverdiana" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			3.1
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			43
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"beckleri" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			90
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"benthamii" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			1.75
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"betchei" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			14.3
		],
		"first_leaf__pinnae_pairs" : [
			4.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.8
		],
		"range_size" : [
			21
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			77.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"bidentata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			84
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			5.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"bidwillii" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"bifaria" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			10
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"biflora" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.45
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			28
		],
		"Stipule_length_median" : [
			1.75
		],
		"Phyllode_length__median" : [
			5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"binata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.55
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			13
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			12.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"binervata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			16.3
		],
		"first_leaf__pinnae_pairs" : [
			3.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.3
		],
		"range_size" : [
			62
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			115
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"binervia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			11.0
		],
		"first_leaf__pinnae_pairs" : [
			2.5
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			47
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			105
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"bivenosa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			20.0
		],
		"first_leaf__pinnae_pairs" : [
			3.1
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.2
		],
		"range_size" : [
			272
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			35
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"blakei subsp. blakei" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			8.5
		],
		"first_leaf__pinnae_pairs" : [
			2.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.1
		],
		"range_size" : [
			135
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"blakei subsp. diphylla" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			90
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"blakelyi" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			21.1
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.2
		],
		"range_size" : [
			60
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			110
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"blaxellii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"blayana" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			28.9
		],
		"first_leaf__pinnae_pairs" : [
			5.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.6
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"boliviana" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			7
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"boormanii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			13.7
		],
		"first_leaf__pinnae_pairs" : [
			3.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.4
		],
		"range_size" : [
			40
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			47.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"botrydion" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.9
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			12
		],
		"Pulvinus_length_median" : [
			0.5
		]
	},
	"brachybotrya (Wirrabara variant)" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			19.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"brachybotrya (appressed-hair variant)" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			19
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"brachybotrya (typical variant)" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			1.594
		],
		"seed_mass" : [
			33.4
		],
		"first_leaf__pinnae_pairs" : [
			3.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.1
		],
		"range_size" : [
			255
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"brachycarpa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			16
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			12
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"brachyclada" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.35
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			32
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			4.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"brachyphylla var. brachyphylla" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			19
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			6
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"brachyphylla var. recurvata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			8
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"brachypoda" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			0.4
		],
		"Phyllode_length__median" : [
			35
		],
		"Pulvinus_length_median" : [
			0.35
		]
	},
	"brachystachya" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			2.88
		],
		"seed_mass" : [
			34.4
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			290
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			1.5
		]
	},
	"bracteolata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			2.75
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"brassii" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			8.5
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.7
		],
		"range_size" : [
			28
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			150
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"brockii" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			183
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"bromilowiana" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"browniana var. browniana" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			1.15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			3.2
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			84
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"browniana var. endlicheri" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"browniana var. glaucescens" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"browniana var. intermedia" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"browniana var. obscura" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"brownii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			138
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			16.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"brumalis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			15.2
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.3
		],
		"range_size" : [
			32
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			70
		],
		"Pulvinus_length_median" : [
			1.5
		]
	},
	"brumalis (incurved phyllode variant)" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			90
		],
		"Pulvinus_length_median" : [
			1.5
		]
	},
	"brumalis (light land variant)" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			1.5
		]
	},
	"brumalis (oblanceolate phyllode variant)" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			1.5
		]
	},
	"brunioides subsp. brunioides" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			21
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			4.75
		],
		"Pulvinus_length_median" : [
			0.5
		]
	},
	"brunioides subsp. granitica" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			8
		],
		"Pulvinus_length_median" : [
			0.5
		]
	},
	"bulgaensis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			0.5
		],
		"Phyllode_length__median" : [
			67.5
		],
		"Pulvinus_length_median" : [
			2.2
		]
	},
	"burbidgeae" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			32
		],
		"Stipule_length_median" : [
			0.5
		],
		"Phyllode_length__median" : [
			27.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"burdekensis" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			25
		],
		"Stipule_length_median" : [
			0.65
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			5
		]
	},
	"burkittii" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			23.9
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			309
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"burrana" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			17
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"burrowii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			13
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			5.6
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.5
		],
		"range_size" : [
			91
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			67.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"burrowsiana" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"buxifolia subsp. buxifolia" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"buxifolia subsp. pubiflora" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			27.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"bynoeana" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			23
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"caerulescens" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			12.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"caesariata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.95
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			2.75
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			0.75
		]
	},
	"caesiella" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.75
		],
		"genome_size" : [
			1.773
		],
		"seed_mass" : [
			19.1
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.7
		],
		"range_size" : [
			31
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			70
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"calamifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			1.524
		],
		"seed_mass" : [
			28.7
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			186
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			1.5
		]
	},
	"calantha" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			110
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"calcarata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			31.9
		],
		"first_leaf__pinnae_pairs" : [
			3.8
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.8
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			2.25
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"calcicola" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			1.404
		],
		"seed_mass" : [
			6.1
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			141
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"calcigera" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			1
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"caleyi" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"calligera" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			35
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"calyculata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			75
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cambagei" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			9.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			32.5
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			314
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			90
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"camptoclada" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			49
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			12
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"campylophylla" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.35
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			20.2
		],
		"first_leaf__pinnae_pairs" : [
			5.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.3
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cana" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			35
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			90
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cangaiensis" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"capillaris" : {
		"section_taxonomy" : [
			"lycopodifolia"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			0.4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			3.75
		],
		"Phyllode_length__median" : [
			7
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cardiophylla" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			2.15
		],
		"genome_size" : [
			1.683
		],
		"seed_mass" : [
			11.7
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			27
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"carens" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			2.25
		],
		"Phyllode_length__median" : [
			1.25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"carneorum" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			44
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			52.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"carnosula" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			7.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"caroleae" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			118
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cassicula" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			17.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"castanostegia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cataractae" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			26
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			72.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"catechu var. sundra" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"catenulata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			17.7
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			74
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			62.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cavealis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			0.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			22.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cedroides" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			0.65
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			2.75
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"celastrifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			34
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			50
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"celsa" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			28
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			102.5
		],
		"Pulvinus_length_median" : [
			4.5
		]
	},
	"centrinervia" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cerastes" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			1
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"chalkeri" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"chamaeleon" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			12
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			135
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"chapmanii subsp. australis" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"chapmanii subsp. chapmanii" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			2.25
		],
		"Phyllode_length__median" : [
			27.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"chartacea" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			24
		],
		"Stipule_length_median" : [
			4.5
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cheelii" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			22.4
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.8
		],
		"range_size" : [
			67
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			130
		],
		"Pulvinus_length_median" : [
			3
		]
	},
	"chinchillensis" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			1.15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			19.9
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"chippendalei" : {
		"section_taxonomy" : [
			"lycopodifolia"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			0.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			70
		],
		"Stipule_length_median" : [
			0.7
		],
		"Phyllode_length__median" : [
			5.25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"chisholmii" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			24.2
		],
		"first_leaf__pinnae_pairs" : [
			3.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.6
		],
		"range_size" : [
			105
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			35
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"chrysella" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			13.3
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			5.5
		],
		"range_size" : [
			46
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			77.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"chrysocephala" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			27
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			7.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"chrysochaeta" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			2.5
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			0.5
		]
	},
	"chrysopoda" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.65
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"chrysotricha" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			10.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			11.1
		],
		"first_leaf__pinnae_pairs" : [
			2.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.7
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cincinnata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			13.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			31.0
		],
		"first_leaf__pinnae_pairs" : [
			2.5
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.4
		],
		"range_size" : [
			41
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			130
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"citrinoviridis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			9.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			7.6
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.5
		],
		"range_size" : [
			67
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"citriodora" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			23
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"clandullensis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			9
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"clarksoniana" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			1.75
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"clelandii" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			46
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			87.5
		],
		"Pulvinus_length_median" : [
			1
		]
	},
	"clunies-rossiae" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			50
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"clydonophora" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			3.25
		]
	},
	"cochlearis" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			8.9
		],
		"first_leaf__pinnae_pairs" : [
			2.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			76
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			35
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cochlocarpa subsp. cochlocarpa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			12
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			57.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cochlocarpa subsp. velutinosa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cockertoniana" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			12
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cognata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6.5
		],
		"genome_size" : [
			1.728
		],
		"seed_mass" : [
			10.8
		],
		"first_leaf__pinnae_pairs" : [
			2.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.8
		],
		"range_size" : [
			36
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"colei var. colei" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			2.495
		],
		"seed_mass" : [
			12.0
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.0
		],
		"range_size" : [
			272
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			155
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"colei var. ileocarpa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			12.3
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.7
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			150
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"colletioides" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			50.9
		],
		"first_leaf__pinnae_pairs" : [
			4.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.0
		],
		"range_size" : [
			218
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			22.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"comans" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			1.9
		],
		"Phyllode_length__median" : [
			6.25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cometes" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			1
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"complanata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			8.7
		],
		"first_leaf__pinnae_pairs" : [
			2.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.4
		],
		"range_size" : [
			124
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			2.5
		]
	},
	"concolorans" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			2
		],
		"Phyllode_length__median" : [
			7
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"concurrens" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			16.7
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.9
		],
		"range_size" : [
			81
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			7
		]
	},
	"conferta" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			51.7
		],
		"first_leaf__pinnae_pairs" : [
			4.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			162
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			8.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"confluens" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			1.532
		],
		"seed_mass" : [
			11.5
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"congesta subsp. cliftoniana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			26
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			7.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"congesta subsp. congesta" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"congesta subsp. wonganensis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			7
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"conjunctifolia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			30
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			14.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"conniana" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			115
		],
		"Pulvinus_length_median" : [
			2.25
		]
	},
	"consanguinea" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.95
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			22
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			35
		],
		"Pulvinus_length_median" : [
			1.75
		]
	},
	"consobrina" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.9
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"conspersa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			7.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			2.1
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			1.8
		],
		"range_size" : [
			38
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			56
		],
		"Pulvinus_length_median" : [
			2
		]
	},
	"constablei" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			2.15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"continua" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			125
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"convallium" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			20
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			132.5
		],
		"Pulvinus_length_median" : [
			7.5
		]
	},
	"coolgardiensis subsp. coolgardiensis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			73.7
		],
		"first_leaf__pinnae_pairs" : [
			5.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.5
		],
		"range_size" : [
			141
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"coolgardiensis subsp. effusa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			90
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"coolgardiensis subsp. latior" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			85
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"coriacea subsp. coriacea" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			89.4
		],
		"first_leaf__pinnae_pairs" : [
			6.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			6.0
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			170
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"coriacea subsp. pendens" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			112.0
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			250
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			210
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"coriacea subsp. sericophylla" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			73.7
		],
		"first_leaf__pinnae_pairs" : [
			5.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.5
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			235
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"costata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.35
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			12
		],
		"Stipule_length_median" : [
			2.25
		],
		"Phyllode_length__median" : [
			10.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"costiniana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.55
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			10.8
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.6
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			2
		],
		"Phyllode_length__median" : [
			14
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"courtii" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			20
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			0.25
		],
		"Phyllode_length__median" : [
			115
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"covenyi" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cowaniana" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cowleana" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			8
		],
		"genome_size" : [
			3.776
		],
		"seed_mass" : [
			8.3
		],
		"first_leaf__pinnae_pairs" : [
			2.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.6
		],
		"range_size" : [
			200
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			140
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cracentis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			37.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"craspedocarpa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			63
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			1.5
		]
	},
	"crassa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			9
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			12.0
		],
		"first_leaf__pinnae_pairs" : [
			2.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.3
		],
		"range_size" : [
			162
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"crassa subsp. crassa" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			120.5
		],
		"first_leaf__pinnae_pairs" : [
			6.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			6.0
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			175
		],
		"Pulvinus_length_median" : [
			7.5
		]
	},
	"crassa subsp. longicoma" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			150
		],
		"Pulvinus_length_median" : [
			7.5
		]
	},
	"crassicarpa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			18
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			93
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			175
		],
		"Pulvinus_length_median" : [
			12
		]
	},
	"crassifructa" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			1
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"crassistipula" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.325
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			4.5
		],
		"Phyllode_length__median" : [
			11.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"crassiuscula" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			20
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"crassuloides" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			18
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			7
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cremiflora" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			25
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			11.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"crenulata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cretacea" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			85
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cretata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			8
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			18.8
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.2
		],
		"range_size" : [
			31
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			105
		],
		"Pulvinus_length_median" : [
			2.5
		]
	},
	"crispula" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			40
		],
		"Stipule_length_median" : [
			4
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"crombiei" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			24
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			110
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cultriformis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			1.867
		],
		"seed_mass" : [
			14.6
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.3
		],
		"range_size" : [
			60
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			22.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cummingiana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			0.4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cuneifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			2.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			2
		],
		"Phyllode_length__median" : [
			14
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cunninghamii" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			1
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cupularis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			1.125
		],
		"seed_mass" : [
			12.3
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			201
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			55
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"curranii" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			17
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			132.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"curvata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"curvinervia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			47.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cuspidifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			31
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cuthbertsonii subsp. cuthbertsonii" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			100.0
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.0
		],
		"range_size" : [
			224
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			57.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cuthbertsonii subsp. linearis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cyclops" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			22.6
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.3
		],
		"range_size" : [
			96
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			67.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cylindrica" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cyperophylla var. cyperophylla" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			12
		],
		"genome_size" : [
			1.364
		],
		"seed_mass" : [
			35.9
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.9
		],
		"range_size" : [
			126
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			135
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"cyperophylla var. omearana" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			160
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"dacrydioides" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			9
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"dallachiana" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			18
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			130
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"dangarensis" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			15.7
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			5.1
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"daphnifolia" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			29
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"daviesii" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"daviesioides" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.65
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			6.4
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			22
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			6
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"daweana" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			55
		],
		"Pulvinus_length_median" : [
			1.5
		]
	},
	"dawsonii" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			49
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"dealbata subsp. dealbata" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			30
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			13.8
		],
		"first_leaf__pinnae_pairs" : [
			3.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.4
		],
		"range_size" : [
			344
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"dealbata subsp. subalpina" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"deanei subsp. deanei" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			4.25
		],
		"genome_size" : [
			1.794
		],
		"seed_mass" : [
			20.7
		],
		"first_leaf__pinnae_pairs" : [
			5.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			5.0
		],
		"range_size" : [
			319
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"deanei subsp. paucijuga" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"debilis" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			30
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"declinata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.325
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			14.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"decora" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			1.534
		],
		"seed_mass" : [
			9.2
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.7
		],
		"range_size" : [
			441
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"decora (narrow phyllode variant)" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			42.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"decurrens" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			17.4
		],
		"first_leaf__pinnae_pairs" : [
			3.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.3
		],
		"range_size" : [
			126
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"deficiens" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			49
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"deflexa" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.075
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			10
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"delibrata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			9
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			37.1
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.7
		],
		"range_size" : [
			25
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			102.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"delicatula" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			12
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			10
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"delphina" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			11.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"deltoidea subsp. ampla" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			2.75
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"deltoidea subsp. deltoidea" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			37
		],
		"Stipule_length_median" : [
			2.75
		],
		"Phyllode_length__median" : [
			7
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"demissa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			25
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			107.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"dempsteri" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			1.178
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			23
		],
		"Stipule_length_median" : [
			8.5
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"densiflora" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.85
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			34
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			35
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"denticulosa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			1.85
		],
		"Phyllode_length__median" : [
			70
		],
		"Pulvinus_length_median" : [
			6
		]
	},
	"dentifera" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			14.3
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.5
		],
		"range_size" : [
			32
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			110
		],
		"Pulvinus_length_median" : [
			0.75
		]
	},
	"depressa" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			0.05
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"dermatophylla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.35
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			16
		],
		"Stipule_length_median" : [
			6
		],
		"Phyllode_length__median" : [
			37.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"derwentiana" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"desertorum var. desertorum" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"desertorum var. nudipes" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			90
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"desmondii" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4.5
		],
		"genome_size" : [
			1.271
		],
		"seed_mass" : [
			9.7
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.8
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			175
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"deuteroneura" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			1
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"diallaga" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"diaphana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			52.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"diaphyllodinea" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			11.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"dictyoneura" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			10.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"dictyophleba" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			8.5
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			247
		],
		"Stipule_length_median" : [
			1.25
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"didyma" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			35
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"dielsii" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			1.2
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			38
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			19.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"dietrichiana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			11.7
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			48
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			180
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"difficilis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			24.3
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.0
		],
		"range_size" : [
			148
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			115
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"difformis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4.5
		],
		"genome_size" : [
			1.986
		],
		"seed_mass" : [
			68.2
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			56
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			110
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"dilatata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			18
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"dimidiata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			7.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			47.7
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.9
		],
		"range_size" : [
			127
		],
		"Stipule_length_median" : [
			2
		],
		"Phyllode_length__median" : [
			77.5
		],
		"Pulvinus_length_median" : [
			6
		]
	},
	"diminuta" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			0.2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			4
		],
		"Pulvinus_length_median" : [
			0.35
		]
	},
	"diphylla" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			5.4
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			1.9
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"disparrima subsp. calidestris" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			15.6
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.4
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			110
		],
		"Pulvinus_length_median" : [
			3
		]
	},
	"disparrima subsp. disparrima" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			13.5
		],
		"first_leaf__pinnae_pairs" : [
			2.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			147
		],
		"Stipule_length_median" : [
			3.5
		],
		"Phyllode_length__median" : [
			85
		],
		"Pulvinus_length_median" : [
			3.5
		]
	},
	"dissona var. dissona" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			38
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"dissona var. indoloria" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			26.5
		],
		"Pulvinus_length_median" : [
			1.25
		]
	},
	"distans" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			8
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			20.3
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.4
		],
		"range_size" : [
			26
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			2.5
		]
	},
	"disticha" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			0.6
		],
		"Phyllode_length__median" : [
			29
		],
		"Pulvinus_length_median" : [
			1
		]
	},
	"ditricha" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			2.9
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"divergens" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			2.2
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			48
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			8
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"dodonaeifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"dodonaeifolia x paradoxa" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			4
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"dolichophylla" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.5
		],
		"genome_size" : [
			1.166
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			155
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"donaldsonii" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			102.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"doratoxylon" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			1.609
		],
		"seed_mass" : [
			10.9
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			175
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			135
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"dorothea" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			13
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			65
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"dorsenna" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			12.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"douglasica" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			1.1
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"drepanocarpa subsp. drepanocarpa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			122
		],
		"Stipule_length_median" : [
			0.4
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"drepanocarpa subsp. latifolia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			13.5
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"drepanophylla" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			26.8
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			175
		],
		"Pulvinus_length_median" : [
			1.75
		]
	},
	"drewiana subsp. drewiana" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			0.45
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			20
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"drewiana subsp. minor" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"drummondii subsp. affinis" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"drummondii subsp. candolleana" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"drummondii subsp. drummondii" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			1.1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			4.0
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			76
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"drummondii subsp. elegans" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"dunnii" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			307.6
		],
		"first_leaf__pinnae_pairs" : [
			7.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			6.5
		],
		"range_size" : [
			52
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			270
		],
		"Pulvinus_length_median" : [
			12.5
		]
	},
	"dura" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"durabilis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.35
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			8.5
		],
		"Phyllode_length__median" : [
			27.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"duriuscula" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.85
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			24
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"eborensis" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"echinula" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			44
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			9.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"echinuliflora" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			1.85
		],
		"Phyllode_length__median" : [
			137.5
		],
		"Pulvinus_length_median" : [
			4
		]
	},
	"effusa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			12
		],
		"Pulvinus_length_median" : [
			0.5
		]
	},
	"effusifolia" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			88
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"elachantha (glabrous variant)" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			145
		],
		"Pulvinus_length_median" : [
			4.5
		]
	},
	"elachantha (typical variant)" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			10.7
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			207
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			137.5
		],
		"Pulvinus_length_median" : [
			4.5
		]
	},
	"elata" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			13.5
		],
		"genome_size" : [
			1.629
		],
		"seed_mass" : [
			43.3
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.5
		],
		"range_size" : [
			37
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"elongata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			1.864
		],
		"seed_mass" : [
			7.4
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.3
		],
		"range_size" : [
			74
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			90
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"elsherana" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			0.4
		],
		"Phyllode_length__median" : [
			91
		],
		"Pulvinus_length_median" : [
			2.5
		]
	},
	"empelioclada" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			1.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"enervia subsp. enervia" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.8
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			82
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"enervia subsp. explicata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ensifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			9
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			39
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			210
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"enterocarpa" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			24
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"epacantha" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			0.4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"epedunculata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.575
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			42.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ephedroides" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			5.1
		],
		"first_leaf__pinnae_pairs" : [
			2.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			20
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			110
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"eremaea" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			34
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			90
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"eremophila var. eremophila" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			65
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			36
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"eremophila var. variabilis" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"eremophiloides" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			0.5
		],
		"Phyllode_length__median" : [
			52.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ericifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.65
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			28
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ericksoniae" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			21
		],
		"Stipule_length_median" : [
			1.25
		],
		"Phyllode_length__median" : [
			3.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"erinacea" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.65
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			169
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			8.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"erioclada" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			5.75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"eriopoda" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			18.1
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.7
		],
		"range_size" : [
			72
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			155
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"errabunda" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			35
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"estrophiolata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			1.221
		],
		"seed_mass" : [
			32.5
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			160
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"euthycarpa" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			154
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			2
		]
	},
	"euthyphylla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			65
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"evenulosa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			18
		],
		"Stipule_length_median" : [
			2.25
		],
		"Phyllode_length__median" : [
			27.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"everistii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			22.2
		],
		"first_leaf__pinnae_pairs" : [
			6.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			8.8
		],
		"range_size" : [
			28
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			52.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"excelsa subsp. angusta" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			50
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"excelsa subsp. excelsa" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			20
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			14.7
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			254
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			52.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"excentrica" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			16
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"exilis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			11.8
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			160
		],
		"Pulvinus_length_median" : [
			3
		]
	},
	"exocarpoides" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			34
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			13
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"extensa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			1.476
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			56
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			150
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"fagonioides" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			0.35
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"falcata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.5
		],
		"genome_size" : [
			1.531
		],
		"seed_mass" : [
			19.3
		],
		"first_leaf__pinnae_pairs" : [
			3.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.3
		],
		"range_size" : [
			147
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			130
		],
		"Pulvinus_length_median" : [
			5
		]
	},
	"falciformis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			12
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			39.4
		],
		"first_leaf__pinnae_pairs" : [
			5.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			5.2
		],
		"range_size" : [
			207
		],
		"Stipule_length_median" : [
			5.5
		],
		"Phyllode_length__median" : [
			170
		],
		"Pulvinus_length_median" : [
			5.5
		]
	},
	"farinosa" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			91
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"farnesiana" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			16
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"fasciculifera" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			61
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"faucium" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			7.3
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.7
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			0.5
		],
		"Phyllode_length__median" : [
			150
		],
		"Pulvinus_length_median" : [
			4
		]
	},
	"fauntleroyi" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			5.1
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			140
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"fecunda" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ferocior" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			19
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			9
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"filamentosa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			175
		],
		"Pulvinus_length_median" : [
			1.75
		]
	},
	"filicifolia" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			8.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			14.6
		],
		"first_leaf__pinnae_pairs" : [
			5.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			6.2
		],
		"range_size" : [
			85
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"filifolia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			20
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			160
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"filipes" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			117.5
		],
		"Pulvinus_length_median" : [
			1.25
		]
	},
	"fimbriata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			9.6
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			161
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			35
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"flabellifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			1.25
		],
		"Phyllode_length__median" : [
			10.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"flagelliformis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			6.2
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			62.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"flavescens" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			12
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			20.9
		],
		"first_leaf__pinnae_pairs" : [
			5.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.5
		],
		"range_size" : [
			123
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			195
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"flavipila var. flavipila" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			25
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			18.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"flavipila var. ovalis" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			11.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"fleckeri" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			8
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			18.9
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			130
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"flexifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			1.633
		],
		"seed_mass" : [
			7.6
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			1.9
		],
		"range_size" : [
			68
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			17.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"flocktoniae" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			70
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"floribunda" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			6.8
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.6
		],
		"range_size" : [
			149
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"floydii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"fodinalis" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			107.5
		],
		"Pulvinus_length_median" : [
			4
		]
	},
	"formidabilis" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.425
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			2.25
		],
		"Phyllode_length__median" : [
			19
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"forrestiana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			4.5
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			0.75
		]
	},
	"forsythii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"fragilis" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			2.1
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.2
		],
		"range_size" : [
			61
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			52.5
		],
		"Pulvinus_length_median" : [
			2.25
		]
	},
	"frigescens" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			9
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			13.9
		],
		"first_leaf__pinnae_pairs" : [
			4.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			5.6
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			115
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"froggattii" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			23
		],
		"Stipule_length_median" : [
			1.25
		],
		"Phyllode_length__median" : [
			5.25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"fulva" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			5.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			16.3
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.7
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"galeata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			85
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"galioides var. galioides" : {
		"section_taxonomy" : [
			"lycopodifolia"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			0.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			229
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"galioides var. glabriflora" : {
		"section_taxonomy" : [
			"lycopodifolia"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"galioides var. leioclada" : {
		"section_taxonomy" : [
			"lycopodifolia"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"gardneri" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			12
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"gelasina" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			70
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"gemina" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			1.8
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			17.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"genistifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.8
		],
		"genome_size" : [
			1.801
		],
		"seed_mass" : [
			11.8
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.5
		],
		"range_size" : [
			216
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"georgensis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			7.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			121
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"georginae" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5.5
		],
		"genome_size" : [
			1.311
		],
		"seed_mass" : [
			78.9
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			157
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"gibbosa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			24
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			70
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"gilbertii" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			4.5
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			16
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"gilesiana" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			26
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			145
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"gillii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			23.7
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.8
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			117.5
		],
		"Pulvinus_length_median" : [
			3
		]
	},
	"gittinsii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			7.4
		],
		"first_leaf__pinnae_pairs" : [
			4.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.3
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"gladiiformis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			17.5
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.5
		],
		"range_size" : [
			63
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"glandulicarpa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			9
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"glaucissima" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.05
		],
		"genome_size" : [
			1.357
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			3.5
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"glaucocaesia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			19.7
		],
		"first_leaf__pinnae_pairs" : [
			5.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"glaucocarpa" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			6.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			19.1
		],
		"first_leaf__pinnae_pairs" : [
			5.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.5
		],
		"range_size" : [
			77
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"glaucoptera" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			53
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"gloeotricha" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			70
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"glutinosissima" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			7.8
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			3.5
		],
		"Phyllode_length__median" : [
			130
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"gnidium" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			23
		],
		"Stipule_length_median" : [
			0.5
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"gonocarpa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			93
		],
		"Stipule_length_median" : [
			0.55
		],
		"Phyllode_length__median" : [
			85
		],
		"Pulvinus_length_median" : [
			0.75
		]
	},
	"gonoclada" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			5.0
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			169
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			90
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"gonophylla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			48
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"gordonii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered"
		],
		"plant_height" : [
			0.9
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			0.5
		],
		"Phyllode_length__median" : [
			12.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"gracilenta" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			0.85
		],
		"Phyllode_length__median" : [
			50
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"gracilifolia" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			0.5
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"graciliformis" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"gracillima" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			22.0
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.8
		],
		"range_size" : [
			13
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			50
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"grandifolia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			8
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			18.3
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.8
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			112.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"granitica" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			25
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			160
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"graniticola" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			13
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"grasbyi" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			18.7
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			81
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			55
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"grayana" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"gregorii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			4.1
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			19
		],
		"Stipule_length_median" : [
			2.5
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"grisea" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			0.4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			13
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"guinetii" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			0.65
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"gunnii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			237
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			9.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"guymeri" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			13
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			117.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"hadrophylla" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			16
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"hakeoides" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			1.944
		],
		"seed_mass" : [
			22.1
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.7
		],
		"range_size" : [
			368
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			82.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"halliana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			1.37
		],
		"seed_mass" : [
			5.6
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.1
		],
		"range_size" : [
			112
		],
		"Stipule_length_median" : [
			2.5
		],
		"Phyllode_length__median" : [
			50
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"hamersleyensis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			17.6
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.1
		],
		"range_size" : [
			32
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			110
		],
		"Pulvinus_length_median" : [
			7.5
		]
	},
	"hamiltoniana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			24
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"hammondii" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			5.3
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.4
		],
		"range_size" : [
			201
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			72.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"handonis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			12
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"harpophylla" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			215
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			185
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"harveyi" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			7.7
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.0
		],
		"range_size" : [
			23
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			85
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"hastulata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			28
		],
		"Stipule_length_median" : [
			3.25
		],
		"Phyllode_length__median" : [
			4.75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"havilandiorum" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			7.2
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			97
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			55
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"helicophylla" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			34.1
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			3
		]
	},
	"helmsiana" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			43
		],
		"Stipule_length_median" : [
			0.5
		],
		"Phyllode_length__median" : [
			12.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"hemignosta" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			41.9
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			216
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			2.25
		]
	},
	"hemiteles" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.25
		],
		"genome_size" : [
			1.438
		],
		"seed_mass" : [
			8.2
		],
		"first_leaf__pinnae_pairs" : [
			2.5
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			131
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			70
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"hemsleyi" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			16.6
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.5
		],
		"range_size" : [
			115
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			85
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"hendersonii" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			0.9
		],
		"Phyllode_length__median" : [
			17
		],
		"Pulvinus_length_median" : [
			0.35
		]
	},
	"heterochroa subsp. heterochroa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			0.5
		]
	},
	"heterochroa subsp. robertii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			17.5
		],
		"Pulvinus_length_median" : [
			0.5
		]
	},
	"heteroclita subsp. heteroclita" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			35
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			70
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"heteroclita subsp. valida" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			65
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"heteroneura var. heteroneura" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			95
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"heteroneura var. jutsonii" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			55
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"heteroneura var. petila" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"heteroneura var. prolixa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"hexaneura" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			14
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"hilliana" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			9.2
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.2
		],
		"range_size" : [
			235
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			44
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"hippuroides" : {
		"section_taxonomy" : [
			"lycopodifolia"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			11.5
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			27
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			16
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"hispidula" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			41
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"hockingsii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			0.5
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"holosericea" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5.5
		],
		"genome_size" : [
			1.126
		],
		"seed_mass" : [
			9.0
		],
		"first_leaf__pinnae_pairs" : [
			2.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.8
		],
		"range_size" : [
			476
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			150
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"holotricha" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			7.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			4.5
		],
		"Phyllode_length__median" : [
			145
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"homaloclada" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"homalophylla" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			34
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"hopperiana" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"horridula" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			3.25
		],
		"Phyllode_length__median" : [
			7
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"howittii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			1.576
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			17
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"hubbardiana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			20
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			7
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"huegelii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.35
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			29
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			11.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"humifusa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			149
		],
		"Stipule_length_median" : [
			2
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			6.5
		]
	},
	"hunteriana" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"hyaloneura" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			43
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			105
		],
		"Pulvinus_length_median" : [
			3.75
		]
	},
	"hylonoma" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			17.8
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			112.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"hypermeces" : {
		"section_taxonomy" : [
			"lycopodifolia"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			11.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"hystrix subsp. continua" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			3.75
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"hystrix subsp. hystrix" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.65
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			16
		],
		"Stipule_length_median" : [
			3.75
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"idiomorpha" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			20
		],
		"Stipule_length_median" : [
			4.5
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"imbricata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			1.392
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			14
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"imitans" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.65
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			5.25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"imparilis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.45
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			11
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"implexa" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			9
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			16.6
		],
		"first_leaf__pinnae_pairs" : [
			6.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			5.8
		],
		"range_size" : [
			324
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			135
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"improcera" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.275
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			4.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"inaequilatera" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			53.8
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			1.8
		],
		"range_size" : [
			116
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			35
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"inaequiloba" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			17
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			27.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"inamabilis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.85
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			3.75
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"incanicarpa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			1
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			57.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"inceana subsp. conformis" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"inceana subsp. inceana" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			42
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			62.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"inceana subsp. latifolia" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			55
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"incognita" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"incongesta" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			1
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			55
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"incrassata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.225
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			2.25
		],
		"Phyllode_length__median" : [
			8.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"incurva" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			21
		],
		"Stipule_length_median" : [
			2
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"infecunda" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			18.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ingramii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ingrata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.35
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			13.25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"inophloia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			3.6
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.9
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			107.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"inops" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			6
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"insolita subsp. efoliolata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			2.5
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"insolita subsp. insolita" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			29
		],
		"Stipule_length_median" : [
			2.5
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"insolita subsp. recurva" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			2.5
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"intorta" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"intricata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.325
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			2.4
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			30
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			3
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"irrorata subsp. irrorata" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			12
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			7.6
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.5
		],
		"range_size" : [
			159
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"irrorata subsp. velutinella" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			7.6
		],
		"first_leaf__pinnae_pairs" : [
			3.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			5.6
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"islana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			0.2
		]
	},
	"isoneura subsp. isoneura" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"isoneura subsp. nimia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"iteaphylla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			69
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ixiophylla" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			1.594
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			107
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ixodes" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			43
		],
		"Stipule_length_median" : [
			0.5
		],
		"Phyllode_length__median" : [
			35
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"jackesiana" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			13
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			155
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"jacksonioides" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.45
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			16
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			6.75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"jamesiana" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			32
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			150
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"jasperensis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			24
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			180
		],
		"Pulvinus_length_median" : [
			1.5
		]
	},
	"jennerae" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			1.641
		],
		"seed_mass" : [
			115.1
		],
		"first_leaf__pinnae_pairs" : [
			4.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			6.1
		],
		"range_size" : [
			104
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			2
		]
	},
	"jensenii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			23
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			42.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"jibberdingensis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			1.188
		],
		"seed_mass" : [
			20.1
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.7
		],
		"range_size" : [
			35
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			235
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"johannis" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			160
		],
		"Pulvinus_length_median" : [
			1.75
		]
	},
	"johnsonii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			24
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"jonesii" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			2.2
		],
		"genome_size" : [
			1.687
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			12
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"jucunda" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			49
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			3.5
		]
	},
	"julifera subsp. gilbertensis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			11.1
		],
		"first_leaf__pinnae_pairs" : [
			1.8
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			219
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			130
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"julifera subsp. julifera" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			7.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"juncifolia subsp. juncifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			10.3
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			121
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			135
		],
		"Pulvinus_length_median" : [
			1.5
		]
	},
	"juncifolia subsp. serpentinicola" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			1.5
		]
	},
	"kalgoorliensis" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			25
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			47.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"karina" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"kelleri" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			28
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			17.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"kempeana" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			1.646
		],
		"seed_mass" : [
			13.2
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.9
		],
		"range_size" : [
			371
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			52.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"kenneallyi" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			200
		],
		"Pulvinus_length_median" : [
			4.5
		]
	},
	"kerryana" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"kettlewelliae" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			48
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			70
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"kettlewelliae (Kybean Range variant)" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			24
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"kimberleyensis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"kingiana" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			10
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"kochii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			1.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"kulnurensis" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			1
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"kybeanensis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			20
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"kydrensis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"laccata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			77
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			130
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lacertensis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			8
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			20
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			147.5
		],
		"Pulvinus_length_median" : [
			9.5
		]
	},
	"lachnophylla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered"
		],
		"plant_height" : [
			0.8
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			21
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lamprocarpa" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			27.4
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.6
		],
		"range_size" : [
			133
		],
		"Stipule_length_median" : [
			3.5
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			3.75
		]
	},
	"lanceolata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			11
		],
		"Pulvinus_length_median" : [
			0.5
		]
	},
	"lanei" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			52.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lanigera var. gracilipes" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			37.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lanigera var. lanigera" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			1.834
		],
		"seed_mass" : [
			11.4
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			111
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			42.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lanigera var. whanii" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			47.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lanuginophylla" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.85
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			2.75
		],
		"Phyllode_length__median" : [
			27.5
		],
		"Pulvinus_length_median" : [
			1
		]
	},
	"laricina var. crassifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			4.5
		],
		"Phyllode_length__median" : [
			35
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"laricina var. laricina" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			30
		],
		"Stipule_length_median" : [
			4.5
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lasiocalyx" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.75
		],
		"genome_size" : [
			1.268
		],
		"seed_mass" : [
			22.7
		],
		"first_leaf__pinnae_pairs" : [
			3.5
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			135
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			210
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lasiocarpa var. bracteolata" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lasiocarpa var. lasiocarpa" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			0.85
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			6.4
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			189
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lasiocarpa var. sedifolia" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lateriticola" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			25
		],
		"Stipule_length_median" : [
			2.5
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"latescens" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			89.5
		],
		"first_leaf__pinnae_pairs" : [
			6.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.9
		],
		"range_size" : [
			87
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			170
		],
		"Pulvinus_length_median" : [
			3
		]
	},
	"latifolia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			54
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			122.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"latior" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			17
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"latipes subsp. latipes" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			6.4
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.2
		],
		"range_size" : [
			95
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			18
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"latipes subsp. licina" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			38
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"latisepala" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			82.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"latzii" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			1.485
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lauta" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lazaridis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			47
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			47.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"leeuweniana" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"legnota" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			150
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"leichhardtii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			27.4
		],
		"first_leaf__pinnae_pairs" : [
			5.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.0
		],
		"range_size" : [
			26
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			22.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"leiocalyx subsp. herveyensis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			12.1
		],
		"first_leaf__pinnae_pairs" : [
			2.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.7
		],
		"range_size" : [
			282
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			125
		],
		"Pulvinus_length_median" : [
			3.5
		]
	},
	"leiocalyx subsp. leiocalyx" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			3.5
		]
	},
	"leioderma" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			1.25
		],
		"genome_size" : [
			1.432
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			16
		],
		"Stipule_length_median" : [
			3.25
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"leiophylla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			1.698
		],
		"seed_mass" : [
			18.4
		],
		"first_leaf__pinnae_pairs" : [
			2.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.2
		],
		"range_size" : [
			55
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			115
		],
		"Pulvinus_length_median" : [
			10.5
		]
	},
	"lentiginea" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			85
		],
		"Pulvinus_length_median" : [
			1
		]
	},
	"leprosa (Dandenong variant)" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			72
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"leprosa (Seymour variant)" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"leprosa (large phyllode variant)" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden",
			"pink to purplish or red"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			90
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"leprosa (typical variant)" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			65
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"leptalea" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			1.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			6.5
		],
		"Pulvinus_length_median" : [
			0.3
		]
	},
	"leptocarpa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			8.8
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			233
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			155
		],
		"Pulvinus_length_median" : [
			5
		]
	},
	"leptoclada" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			20
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"leptoloba" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			26
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"leptoneura" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			1.328
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			52.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"leptopetala" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			43
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			37.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"leptophleba" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			50
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			72.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"leptospermoides subsp. leptospermoides" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			94
		],
		"Stipule_length_median" : [
			2
		],
		"Phyllode_length__median" : [
			12
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"leptospermoides subsp. obovata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			2
		],
		"Phyllode_length__median" : [
			7.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"leptospermoides subsp. psammophila" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			2
		],
		"Phyllode_length__median" : [
			5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"leptostachya" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			3.9
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.3
		],
		"range_size" : [
			231
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			65
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"leucoclada subsp. argentifolia" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			7.6
		],
		"first_leaf__pinnae_pairs" : [
			4.5
		],
		"_leaflet__pairs_2nd_leaf" : [
			5.2
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"leucoclada subsp. leucoclada" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			11.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			15.0
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			86
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"leucolobia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			40
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			22.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"levata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			107.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ligulata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			39.5
		],
		"first_leaf__pinnae_pairs" : [
			3.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.0
		],
		"range_size" : [
			1090
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			52.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ligustrina" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			34
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"limbata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			25.6
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.1
		],
		"range_size" : [
			58
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"linarioides" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			25
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			22.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"linearifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			34
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			90
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lineata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			1.456
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			145
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			13
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lineolata subsp. lineolata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			2.3
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			64
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			50
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lineolata subsp. multilineata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			50
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"linifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			23.8
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.9
		],
		"range_size" : [
			35
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			35
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"linophylla" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lirellata subsp. compressa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			1
		]
	},
	"lirellata subsp. lirellata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			21
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"littorea" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			4.1
		],
		"first_leaf__pinnae_pairs" : [
			1.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			1.0
		],
		"range_size" : [
			32
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			12
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lobulata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			0.5
		]
	},
	"loderi" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			10.6
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			1.8
		],
		"range_size" : [
			72
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"longifolia subsp. longifolia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			322
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			125
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"longifolia subsp. sophorae" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			2.064
		],
		"seed_mass" : [
			20.4
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			85
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"longipedunculata" : {
		"section_taxonomy" : [
			"lycopodifolia"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			17.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"longiphyllodinea" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.9
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			21
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			300
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"longispicata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			12.0
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.3
		],
		"range_size" : [
			126
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			140
		],
		"Pulvinus_length_median" : [
			8
		]
	},
	"longispinea" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			74
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			150
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"longissima" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			1.544
		],
		"seed_mass" : [
			12.1
		],
		"first_leaf__pinnae_pairs" : [
			3.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			58
		],
		"Stipule_length_median" : [
			0.3
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"loroloba" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			9
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			25
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"loxophylla" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			9.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lucasii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			22.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lullfitziorum" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			0.45
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			16
		],
		"Stipule_length_median" : [
			1.75
		],
		"Phyllode_length__median" : [
			7.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lumholtzii" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			1
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lunata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			18
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"luteola" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			0.45
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			21
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lycopodiifolia" : {
		"section_taxonomy" : [
			"lycopodifolia"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			5.4
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			132
		],
		"Stipule_length_median" : [
			0.9
		],
		"Phyllode_length__median" : [
			3.25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"lysiphloia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			14.1
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			294
		],
		"Stipule_length_median" : [
			1.25
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"mabellae" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			37.5
		],
		"first_leaf__pinnae_pairs" : [
			5.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.1
		],
		"range_size" : [
			24
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			170
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"macdonnelliensis subsp. macdonnelliensis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			87
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			105
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"macdonnelliensis subsp. teretifolia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"mackeyana" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			44
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			17.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"macnuttiana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			110
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"maconochieana" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			12
		],
		"genome_size" : [
			1.566
		],
		"seed_mass" : [
			22.1
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			130
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"macradenia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			1.402
		],
		"seed_mass" : [
			27.6
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.1
		],
		"range_size" : [
			55
		],
		"Stipule_length_median" : [
			3.5
		],
		"Phyllode_length__median" : [
			190
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"maidenii" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			20
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			14.3
		],
		"first_leaf__pinnae_pairs" : [
			3.5
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.8
		],
		"range_size" : [
			154
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			150
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"maitlandii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			1.348
		],
		"seed_mass" : [
			13.1
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.5
		],
		"range_size" : [
			277
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			16
		],
		"Pulvinus_length_median" : [
			0.5
		]
	},
	"malloclada" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			50
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"mangium" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			18.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			12.1
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.1
		],
		"range_size" : [
			38
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			190
		],
		"Pulvinus_length_median" : [
			6
		]
	},
	"manipularis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"fasciculate"
		],
		"plant_height" : [
			0.875
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"maranoensis" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			12
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			130
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"marramamba" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			35
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"masliniana" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			27
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			72.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"matthewii" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			9
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			1.4
		],
		"Phyllode_length__median" : [
			125
		],
		"Pulvinus_length_median" : [
			5
		]
	},
	"maxwellii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			21
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			37.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"mearnsii" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			1.54
		],
		"seed_mass" : [
			10.4
		],
		"first_leaf__pinnae_pairs" : [
			3.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			6.3
		],
		"range_size" : [
			211
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"megacephala" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			2.75
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"megalantha" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			46.3
		],
		"first_leaf__pinnae_pairs" : [
			3.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.0
		],
		"range_size" : [
			40
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"meiantha" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"meiosperma" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			17
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			7.5
		]
	},
	"meisneri" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			30.7
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.0
		],
		"range_size" : [
			18
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			27.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"melanoxylon" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			18
		],
		"genome_size" : [
			1.62
		],
		"seed_mass" : [
			12.8
		],
		"first_leaf__pinnae_pairs" : [
			4.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.3
		],
		"range_size" : [
			479
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"melleodora" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			8.7
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			380
		],
		"Stipule_length_median" : [
			1.25
		],
		"Phyllode_length__median" : [
			27.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"melvillei" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			177
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			77.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"menzelii" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			0.5
		],
		"Phyllode_length__median" : [
			27.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"merinthophora" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			30
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			160
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"merrallii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			1.334
		],
		"seed_mass" : [
			3.9
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			1.8
		],
		"range_size" : [
			179
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			16.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"merrickiae" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			0.4
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			1
		]
	},
	"microbotrya var. borealis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			70
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"microbotrya var. microbotrya" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			82.8
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			122
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			105
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"microcalyx" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			16
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"microcarpa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			1.367
		],
		"seed_mass" : [
			4.3
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			120
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			37.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"microcephala" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			18
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"microneura" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"microsperma" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			39
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			105
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"midgleyi" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			16.7
		],
		"first_leaf__pinnae_pairs" : [
			3.5
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			28
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			102.5
		],
		"Pulvinus_length_median" : [
			7
		]
	},
	"mimica var. angusta" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"mimica var. mimica" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			40
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"mimula" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			166.5
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			41
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			140
		],
		"Pulvinus_length_median" : [
			3.5
		]
	},
	"minutifolia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"fasciculate"
		],
		"plant_height" : [
			0.65
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			7.5
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.7
		],
		"range_size" : [
			31
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			2.15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"minutissima" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"minyura" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			2.862
		],
		"seed_mass" : [
			10.2
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.6
		],
		"range_size" : [
			116
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			12.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"mitchellii" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			1.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			52
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"mitodes" : {
		"section_taxonomy" : [
			"lycopodifolia"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			1
		],
		"Stipule_length_median" : [
			1.65
		],
		"Phyllode_length__median" : [
			15.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"moirii subsp. dasycarpa" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			6
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"moirii subsp. moirii" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			0.375
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			53
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"moirii subsp. recurvistipula" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			4.5
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"mollifolia" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			3.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			17.3
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.5
		],
		"range_size" : [
			24
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"montana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			1.64
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			173
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"monticola" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			30.7
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.2
		],
		"range_size" : [
			296
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			21
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"mooreana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.65
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			1.75
		],
		"Phyllode_length__median" : [
			5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"mountfordiae" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			24.6
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.7
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			28
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"mucronata subsp. dependens" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			37.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"mucronata subsp. longifolia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			145
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"mucronata subsp. mucronata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			8
		],
		"genome_size" : [
			1.861
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			198
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"muelleriana" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			4.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			22.0
		],
		"first_leaf__pinnae_pairs" : [
			3.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.8
		],
		"range_size" : [
			35
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"multisiliqua" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			14.0
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			167
		],
		"Stipule_length_median" : [
			0.5
		],
		"Phyllode_length__median" : [
			50
		],
		"Pulvinus_length_median" : [
			3
		]
	},
	"multispicata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.45
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			8.7
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			136
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"multistipulosa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			67.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"murrayana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			1.318
		],
		"seed_mass" : [
			25.6
		],
		"first_leaf__pinnae_pairs" : [
			2.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.3
		],
		"range_size" : [
			511
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"mutabilis subsp. angustifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			4
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"mutabilis subsp. incurva" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			2
		],
		"Phyllode_length__median" : [
			42.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"mutabilis subsp. mutabilis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			59
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"mutabilis subsp. rhynchophylla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"mutabilis subsp. stipulifera" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			2.5
		],
		"Phyllode_length__median" : [
			35
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"myrtifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			1.401
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			412
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"nana" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			55
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"nanodealbata" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			12
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			14.0
		],
		"first_leaf__pinnae_pairs" : [
			3.6
		],
		"_leaflet__pairs_2nd_leaf" : [
			5.9
		],
		"range_size" : [
			17
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"nanopravissima" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			6
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"nematophylla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			6.4
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"neriifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			9
		],
		"genome_size" : [
			1.829
		],
		"seed_mass" : [
			33.8
		],
		"first_leaf__pinnae_pairs" : [
			6.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			5.8
		],
		"range_size" : [
			165
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			105
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"nervosa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			42
		],
		"Stipule_length_median" : [
			5.5
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"nesophila" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			23
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"neurocarpa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			11.1
		],
		"first_leaf__pinnae_pairs" : [
			3.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			89
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			170
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"neurophylla subsp. erugata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			132.5
		],
		"Pulvinus_length_median" : [
			4
		]
	},
	"neurophylla subsp. neurophylla" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			119
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			67.5
		],
		"Pulvinus_length_median" : [
			1.5
		]
	},
	"newbeyi" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			0.65
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"newmanii" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			35
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"nigricans" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"nigripilosa subsp. latifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			27.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"nigripilosa subsp. nigripilosa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			62
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"nilotica subsp. indica" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			26
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"nitidula" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			17
		],
		"Stipule_length_median" : [
			1.25
		],
		"Phyllode_length__median" : [
			22.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"nivea" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			15.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"nodiflora" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"fasciculate"
		],
		"plant_height" : [
			1.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			10
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"nodiflora var. ferox " : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			8.1
		],
		"first_leaf__pinnae_pairs" : [
			2.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.6
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"notabilis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			10.0
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			127
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			4
		]
	},
	"nova-anglica" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			1
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			6
		]
	},
	"nuperrima" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			94
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			13.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"nuperrima subsp. cassitera " : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			9.9
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.8
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"nyssophylla" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.8
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			240
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"obesa" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.45
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"obliquinervia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			8
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			20.0
		],
		"first_leaf__pinnae_pairs" : [
			2.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			5.2
		],
		"range_size" : [
			103
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			110
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"obovata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.45
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			12.8
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			16
		],
		"Stipule_length_median" : [
			2.75
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"obtecta" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			16
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			90
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"obtusata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			22.0
		],
		"first_leaf__pinnae_pairs" : [
			3.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.0
		],
		"range_size" : [
			36
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"obtusifolia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			7.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			91
		],
		"Stipule_length_median" : [
			0.25
		],
		"Phyllode_length__median" : [
			185
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"octonervia" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			1.75
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"oldfieldii" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			8.1
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			1.8
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"olgana" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			1.475
		],
		"seed_mass" : [
			15.4
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.3
		],
		"range_size" : [
			32
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"oligoneura" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"oligophleba" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			15.5
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.8
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"olsenii" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			9
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			31.2
		],
		"first_leaf__pinnae_pairs" : [
			6.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			7.3
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"omalophylla" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			7.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			13.6
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.5
		],
		"range_size" : [
			146
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ommatosperma" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			107.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"oncinocarpa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			107
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			104
		],
		"Pulvinus_length_median" : [
			2.5
		]
	},
	"oncinophylla subsp. oncinophylla" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			19
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			105
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"oncinophylla subsp. patulifolia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			65
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ophiolithica" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			28
		],
		"Pulvinus_length_median" : [
			1.75
		]
	},
	"oraria" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			45
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			62.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"orbifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			18
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			14
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"orites" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			30
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			150
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"orthocarpa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			19.3
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.3
		],
		"range_size" : [
			145
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			90
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"orthotricha" : {
		"section_taxonomy" : [
			"lycopodifolia"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			22
		],
		"Stipule_length_median" : [
			1.1
		],
		"Phyllode_length__median" : [
			5.75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"oshanesii" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			16.3
		],
		"first_leaf__pinnae_pairs" : [
			5.5
		],
		"_leaflet__pairs_2nd_leaf" : [
			7.3
		],
		"range_size" : [
			36
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"oswaldii" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			1.427
		],
		"seed_mass" : [
			64.6
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			948
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			50
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"oxycedrus" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			92
		],
		"Stipule_length_median" : [
			2
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"oxycedrus x sophorae" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			65
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"oxyclada" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.55
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			3.9
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			10
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pachyacra" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			99
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			140
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pachycarpa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4.5
		],
		"genome_size" : [
			1.518
		],
		"seed_mass" : [
			139.0
		],
		"first_leaf__pinnae_pairs" : [
			3.5
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.1
		],
		"range_size" : [
			26
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			235
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pachyphloia subsp. brevipinnula" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			3.5
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pachyphloia subsp. pachyphloia" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			3.5
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pachyphylla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			18
		],
		"Stipule_length_median" : [
			2.25
		],
		"Phyllode_length__median" : [
			42.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pachypoda" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			22
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			16.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pallidifolia" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"palustris" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			36.6
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			18
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			155
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"papulosa" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.125
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"papyrocarpa" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			180
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"Parachidendron" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"paradoxa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			1.663
		],
		"seed_mass" : [
			10.2
		],
		"first_leaf__pinnae_pairs" : [
			2.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.8
		],
		"range_size" : [
			335
		],
		"Stipule_length_median" : [
			8
		],
		"Phyllode_length__median" : [
			14
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"paraneura" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			2.969
		],
		"seed_mass" : [
			16.7
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			150
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			135
		],
		"Pulvinus_length_median" : [
			2
		]
	},
	"Paraserianthes" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"parramattensis" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			11.5
		],
		"first_leaf__pinnae_pairs" : [
			3.5
		],
		"_leaflet__pairs_2nd_leaf" : [
			5.5
		],
		"range_size" : [
			63
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"parvipinnula" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			1.535
		],
		"seed_mass" : [
			18.9
		],
		"first_leaf__pinnae_pairs" : [
			5.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			5.5
		],
		"range_size" : [
			35
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pataczekii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"patagiata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			36
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"paula" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pedina" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			82.5
		],
		"Pulvinus_length_median" : [
			4.5
		]
	},
	"pedleyi" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pellita" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			70
		],
		"Stipule_length_median" : [
			1.75
		],
		"Phyllode_length__median" : [
			132.5
		],
		"Pulvinus_length_median" : [
			8
		]
	},
	"pelophila" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			55
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pendula" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			12
		],
		"genome_size" : [
			1.613
		],
		"seed_mass" : [
			26.2
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.1
		],
		"range_size" : [
			195
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pennata subsp. kerrii" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			6.5
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"penninervis var. longiracemosa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			110
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"penninervis var. penninervis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			8
		],
		"genome_size" : [
			1.829
		],
		"seed_mass" : [
			45.2
		],
		"first_leaf__pinnae_pairs" : [
			4.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			5.0
		],
		"range_size" : [
			268
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pentadenia" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			3.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			6.0
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			25
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"perangusta" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"peregrinalis" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			18.2
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"perryi" : {
		"section_taxonomy" : [
			"lycopodifolia"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			18.7
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			34
		],
		"Stipule_length_median" : [
			2.5
		],
		"Phyllode_length__median" : [
			11.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"petraea" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			48
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			197.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"peuce" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			15
		],
		"genome_size" : [
			1.318
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			25
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"phaeocalyx" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.45
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			11.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pharangites" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			3.25
		],
		"Phyllode_length__median" : [
			27.5
		],
		"Pulvinus_length_median" : [
			0.75
		]
	},
	"phasmoides" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"phlebocarpa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			63
		],
		"Stipule_length_median" : [
			1.25
		],
		"Phyllode_length__median" : [
			37.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"phlebopetala var. phlebopetala" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			2.75
		],
		"Phyllode_length__median" : [
			7.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"phlebopetala var. pubescens" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			2.75
		],
		"Phyllode_length__median" : [
			7.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"phlebophylla" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			20.3
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.8
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			90
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pickardii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			1.892
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			8.5
		],
		"Phyllode_length__median" : [
			42.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"piligera" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			16
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			17
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pilligaensis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			30
		],
		"Stipule_length_median" : [
			0.5
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pinguiculosa subsp. pinguiculosa" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.65
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			21
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pinguiculosa subsp. teretifolia" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pinguifolia" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			27.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"platycarpa" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			1.775
		],
		"seed_mass" : [
			170.3
		],
		"first_leaf__pinnae_pairs" : [
			4.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.4
		],
		"range_size" : [
			240
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			140
		],
		"Pulvinus_length_median" : [
			3.5
		]
	},
	"plautella" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.85
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			11.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"plectocarpa subsp. plectocarpa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			9
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			206
		],
		"Stipule_length_median" : [
			0.8
		],
		"Phyllode_length__median" : [
			149
		],
		"Pulvinus_length_median" : [
			2.75
		]
	},
	"plectocarpa subsp. tanumbirinensis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			0.55
		],
		"Phyllode_length__median" : [
			142.5
		],
		"Pulvinus_length_median" : [
			1.2
		]
	},
	"plicata" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"podalyriifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			102
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			1.5
		]
	},
	"polifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			29
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			70
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"poliochroa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			23
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			17.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"polyadenia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			62.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"polybotrya" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			2.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			66
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"polystachya" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			14
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			61
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			130
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"porcata" : {
		"section_taxonomy" : [
			"lycopodifolia"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			0.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			1
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			17.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"praelongata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			29
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			210
		],
		"Pulvinus_length_median" : [
			1.25
		]
	},
	"praemorsa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			55
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"praetermissa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.8
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			122.5
		],
		"Pulvinus_length_median" : [
			1.5
		]
	},
	"prainii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.25
		],
		"genome_size" : [
			1.384
		],
		"seed_mass" : [
			23.9
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			131
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			65
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pravifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			92
		],
		"Stipule_length_median" : [
			1.25
		],
		"Phyllode_length__median" : [
			8.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pravissima" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5.5
		],
		"genome_size" : [
			1.987
		],
		"seed_mass" : [
			10.6
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.8
		],
		"range_size" : [
			58
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			9.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"preissiana" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			18
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"prismifolia" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.325
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			1.25
		],
		"Phyllode_length__median" : [
			7
		],
		"Pulvinus_length_median" : [
			0.5
		]
	},
	"pritzeliana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.35
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			25
		],
		"Stipule_length_median" : [
			2
		],
		"Phyllode_length__median" : [
			7
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"producta" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			40
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			55
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"profusa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			0.2
		],
		"Phyllode_length__median" : [
			12
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"proiantha" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			142.5
		],
		"Pulvinus_length_median" : [
			2.25
		]
	},
	"prominens" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			7
		],
		"genome_size" : [
			1.818
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			24
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pruinocarpa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			7.5
		],
		"genome_size" : [
			1.392
		],
		"seed_mass" : [
			26.7
		],
		"first_leaf__pinnae_pairs" : [
			3.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.8
		],
		"range_size" : [
			156
		],
		"Stipule_length_median" : [
			4
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pruinosa" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			1.626
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			36
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pterocaulon" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			24.3
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ptychoclada" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ptychophylla" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			10.9
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			1.9
		],
		"range_size" : [
			32
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pubescens" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			9.1
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			6.0
		],
		"range_size" : [
			12
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pubicosta" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			19.2
		],
		"first_leaf__pinnae_pairs" : [
			3.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.5
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			62.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pubifolia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			8
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pubirhachis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			18
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			85
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pulchella var. glaberrima" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			9.7
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pulchella var. goadbyi" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pulchella var. pulchella" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			1.901
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			184
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pulchella var. reflexa" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pulviniformis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			19
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			7.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"puncticulata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			12
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"purpureopetala" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pink to purplish or red"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			2.5
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pusilla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			2.25
		],
		"Phyllode_length__median" : [
			7.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pustula" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			53
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pycnantha" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			345
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			115
		],
		"Pulvinus_length_median" : [
			5.5
		]
	},
	"pycnocephala" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.45
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			32
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			8.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pycnostachya" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			92.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"pygmaea" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			1
		],
		"Stipule_length_median" : [
			0.5
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			0.5
		]
	},
	"pyrifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			1.172
		],
		"seed_mass" : [
			39.4
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.3
		],
		"range_size" : [
			173
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			42.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"quadrilateralis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			42
		],
		"Stipule_length_median" : [
			0.5
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"quadrimarginea" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			34.2
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.8
		],
		"range_size" : [
			76
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			85
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"quadrisulcata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			8.3
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			13.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"quinquenervia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.85
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			13
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"quornensis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			37.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"racospermoides" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ramiflora" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ramulosa var. linophylla" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			102.6
		],
		"first_leaf__pinnae_pairs" : [
			3.2
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.8
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			105
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ramulosa var. ramulosa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			1.538
		],
		"seed_mass" : [
			33.9
		],
		"first_leaf__pinnae_pairs" : [
			2.5
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.7
		],
		"range_size" : [
			671
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			110
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"recurvata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"redolens" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			6.0
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.5
		],
		"range_size" : [
			24
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"rendlei" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.65
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			11.5
		],
		"Phyllode_length__median" : [
			8.25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"repanda" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			5.5
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			47.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"repens" : {
		"section_taxonomy" : [
			"lycopodifolia"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			1
		],
		"Stipule_length_median" : [
			1.75
		],
		"Phyllode_length__median" : [
			12
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"resinicostata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			0.5
		],
		"Phyllode_length__median" : [
			7
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"resinimarginea" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			2.5
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			53
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			130
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"resinistipulea" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			17
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"resinosa" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			17
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			55
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"restiacea" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			6.6
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			77
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"retinervis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			41.4
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.4
		],
		"range_size" : [
			28
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			105
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"retinodes var. retinodes (swamp variant)" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			127.5
		],
		"Pulvinus_length_median" : [
			3
		]
	},
	"retinodes var. retinodes (typical variant)" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			7.5
		],
		"genome_size" : [
			1.619
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			75
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			107.5
		],
		"Pulvinus_length_median" : [
			3
		]
	},
	"retinodes var. uncifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			3
		]
	},
	"retivenea subsp. clandestina" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			4.25
		],
		"Phyllode_length__median" : [
			57.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"retivenea subsp. retivenea" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			36.7
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			182
		],
		"Stipule_length_median" : [
			2.5
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"retrorsa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			17.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"rhamphophylla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			6
		],
		"Phyllode_length__median" : [
			14
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"rhetinocarpa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			19
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			3.75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"rhigiophylla" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			22
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			19.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"rhodophloia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			8.1
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.7
		],
		"range_size" : [
			134
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			62.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"rhodoxylon" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			13
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			41
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"riceana" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			11.4
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			26
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			33.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"richardsii" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			28.5
		],
		"Pulvinus_length_median" : [
			0.5
		]
	},
	"ridleyana" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.55
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			18.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"rigens" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			1.273
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			386
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			85
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"rigescens" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.8
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			65
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"rigida" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			12
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			11.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"rivalis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			32
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			90
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"robeorum" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			17
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"robinae" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			2
		],
		"Phyllode_length__median" : [
			5.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"rossei" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			26
		],
		"Stipule_length_median" : [
			3.5
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"rostellata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			1.1
		],
		"Phyllode_length__median" : [
			4.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"rostellifera" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			78
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"rothii" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			9
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			232.8
		],
		"first_leaf__pinnae_pairs" : [
			6.5
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			50
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			200
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"rotundifolia" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			9.1
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.7
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"roycei" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"rubida" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.25
		],
		"genome_size" : [
			1.828
		],
		"seed_mass" : [
			22.0
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.8
		],
		"range_size" : [
			187
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			125
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"rubricola" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			0.5
		],
		"Phyllode_length__median" : [
			31.5
		],
		"Pulvinus_length_median" : [
			1
		]
	},
	"rupicola" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			1.216
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			83
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ruppii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			13
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ryaniana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			4
		],
		"Phyllode_length__median" : [
			18.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sabulosa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			16.4
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.5
		],
		"range_size" : [
			23
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"saliciformis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4.75
		],
		"genome_size" : [
			1.681
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			85
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"salicina" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			8
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			48.9
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.3
		],
		"range_size" : [
			559
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			135
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"saligna" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			19.2
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			160
		],
		"Pulvinus_length_median" : [
			1.5
		]
	},
	"saxatilis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			13
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			27.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"saxicola" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			2.25
		],
		"Phyllode_length__median" : [
			10.75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"scabra" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"fasciculate"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"scalena" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			1.25
		],
		"Phyllode_length__median" : [
			7.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"scalpelliformis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"schinoides" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			1.525
		],
		"seed_mass" : [
			18.0
		],
		"first_leaf__pinnae_pairs" : [
			5.5
		],
		"_leaflet__pairs_2nd_leaf" : [
			6.4
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sciophanes" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			1
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"scirpifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			21.0
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.3
		],
		"range_size" : [
			32
		],
		"Stipule_length_median" : [
			4
		],
		"Phyllode_length__median" : [
			135
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"scleroclada" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			16
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sclerophylla var. pilosa" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			21.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sclerophylla var. sclerophylla" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			213
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sclerophylla var. teretiuscula" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sclerosperma subsp. glaucescens" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sclerosperma subsp. sclerosperma" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			92.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"scopulorum" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			220
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			2
		]
	},
	"seclusa" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			19.9
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			1
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			125
		],
		"Pulvinus_length_median" : [
			6
		]
	},
	"sedifolia subsp. pulvinata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			3.5
		],
		"Pulvinus_length_median" : [
			0.4
		]
	},
	"sedifolia subsp. sedifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			2
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"semiaurea" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			47.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"semibinervia" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"semicircinalis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			1.25
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			0.5
		]
	},
	"semilunata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			32
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			22.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"semirigida" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			27.3
		],
		"first_leaf__pinnae_pairs" : [
			6.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			28
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			65
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"semitrullata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			7.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sericata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			12
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			115
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sericocarpa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			30
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			17.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sericoflora" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			6.2
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.4
		],
		"range_size" : [
			24
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			165
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sericophylla" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			241
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sertiformis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			52
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			17.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sessilis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			2.1
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			1.9
		],
		"range_size" : [
			41
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			16
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sessilispica" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.65
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			6.0
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			40
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			82.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"setulifera" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			22
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			4.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"shirleyi" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			9.8
		],
		"first_leaf__pinnae_pairs" : [
			2.8
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.7
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			145
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"shuttleworthii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.375
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			2
		],
		"Phyllode_length__median" : [
			10.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sibilans" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			28
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			140
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sibina" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			11.6
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			51
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sibirica" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			304
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"siculiformis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			4.8
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			1.9
		],
		"range_size" : [
			107
		],
		"Stipule_length_median" : [
			0.5
		],
		"Phyllode_length__median" : [
			22.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"signata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			15.0
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.3
		],
		"range_size" : [
			35
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			150
		],
		"Pulvinus_length_median" : [
			4.5
		]
	},
	"silvestris" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			18
		],
		"genome_size" : [
			1.708
		],
		"seed_mass" : [
			20.1
		],
		"first_leaf__pinnae_pairs" : [
			4.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.0
		],
		"range_size" : [
			29
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"simmonsiana" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			26
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			29.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"simsii" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			11.1
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			163
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"simulans" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			10
		],
		"Pulvinus_length_median" : [
			0.5
		]
	},
	"singula" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.175
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			35
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sinuata" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"smeringa" : {
		"section_taxonomy" : [
			"lycopodifolia"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			1.75
		],
		"Phyllode_length__median" : [
			4.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"solenota" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			92.5
		],
		"Pulvinus_length_median" : [
			5
		]
	},
	"sorophylla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			0.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			2.25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sp.A" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sp.B" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sp.C" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			1.15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sp.D" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sp.E" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sp.F" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"spania" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			13
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			35
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sparsiflora" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			9.6
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			90
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"spathulifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			36
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"speckii" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"spectabilis" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			1.717
		],
		"seed_mass" : [
			29.0
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.0
		],
		"range_size" : [
			142
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sphacelata subsp. recurva" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			14
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sphacelata subsp. sphacelata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			0.85
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			103
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			15.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sphacelata subsp. verticillata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled",
			"subwhorled",
			"fasciculate"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			13.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sphaerostachya" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			22
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sphenophylla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.8
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			1.75
		],
		"Phyllode_length__median" : [
			5.75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"spilleriana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			13
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"spinescens" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			188
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"spinosissima" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			0.85
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			17
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			5.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"spirorbis subsp. solandri" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			12
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			9.6
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.0
		],
		"range_size" : [
			25
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			130
		],
		"Pulvinus_length_median" : [
			3
		]
	},
	"splendens" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"spondylophylla" : {
		"section_taxonomy" : [
			"lycopodifolia"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			144
		],
		"Stipule_length_median" : [
			1.25
		],
		"Phyllode_length__median" : [
			8
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"spongolitica" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			8.5
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			50
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"spooneri" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sporadica" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"squamata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.375
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			25
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"stanleyi" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			225
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"startii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			37.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"steedmanii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			171.8
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.3
		],
		"range_size" : [
			47
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			5
		]
	},
	"stellaticeps" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			60
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			16.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"stenophylla" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			12
		],
		"genome_size" : [
			1.355
		],
		"seed_mass" : [
			66.6
		],
		"first_leaf__pinnae_pairs" : [
			5.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.3
		],
		"range_size" : [
			381
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			275
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"stenoptera" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			86
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"stereophylla var. cylindrata" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			145
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"stereophylla var. stereophylla" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			3.5
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			1.8
		],
		"range_size" : [
			79
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			125
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"stigmatophylla" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			1.748
		],
		"seed_mass" : [
			13.8
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.7
		],
		"range_size" : [
			57
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			55
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"stipuligera" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			10.8
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.3
		],
		"range_size" : [
			204
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			62.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"stipulosa" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			1.619
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			3.5
		],
		"Phyllode_length__median" : [
			6
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"storyi" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			17.2
		],
		"first_leaf__pinnae_pairs" : [
			5.5
		],
		"_leaflet__pairs_2nd_leaf" : [
			8.0
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"stowardii" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			169
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			65
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"striatifolia" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			8
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			8.9
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			67.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"stricta" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			198
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			87.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"strongylophylla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			22.8
		],
		"first_leaf__pinnae_pairs" : [
			5.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			5.1
		],
		"range_size" : [
			66
		],
		"Stipule_length_median" : [
			6.5
		],
		"Phyllode_length__median" : [
			17.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"suaveolens" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			29.9
		],
		"first_leaf__pinnae_pairs" : [
			3.8
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.5
		],
		"range_size" : [
			214
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			105
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"subcaerulea" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			38.9
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			42
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			52.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"subcontorta" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			25
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"suberosa" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			7.75
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"subflexuosa subsp. capillata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"subflexuosa subsp. subflexuosa" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.65
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			1.5
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.5
		],
		"range_size" : [
			25
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			52.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sublanata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			53
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			9.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"subporosa" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			12
		],
		"genome_size" : [
			1.639
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"subracemosa" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			3.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			69.1
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"subrigida" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			115
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"subrigida (Shark Bay variant)" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			160
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"subsessilis" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			12
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"subternata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"fasciculate"
		],
		"plant_height" : [
			1.2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			24
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			9
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"subtessarogona" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			8
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			31.0
		],
		"first_leaf__pinnae_pairs" : [
			2.2
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.1
		],
		"range_size" : [
			22
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"subtiliformis" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"subtilinervis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			22
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			124
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"subulata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			1.401
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			36
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sulcata var. planoconvexa" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			8.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sulcata var. platyphylla" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			12
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sulcata var. sulcata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			1.5
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			0.5
		],
		"range_size" : [
			95
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			21.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sulcaticaulis" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"sutherlandii" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			3.5
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"symonii" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			16
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			110
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"synchronicia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			30.0
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			112
		],
		"Stipule_length_median" : [
			6.5
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"synoria" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"tabula" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			8
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"tarculensis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			47
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			40
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"tayloriana" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"telmica" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			13.6
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.0
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"tenuinervis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			9
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			16
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"tenuior" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"tenuispica" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			55
		],
		"Pulvinus_length_median" : [
			1
		]
	},
	"tenuissima" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			4.9
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			314
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"tephrina" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			20
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			94
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			90
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"teretifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.35
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			12.4
		],
		"first_leaf__pinnae_pairs" : [
			1.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			2.75
		],
		"Phyllode_length__median" : [
			17.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"terminalis subsp. angustifolia" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"terminalis subsp. aurea" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"terminalis subsp. longiaxilis" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"terminalis subsp. terminalis" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			1.595
		],
		"seed_mass" : [
			34.9
		],
		"first_leaf__pinnae_pairs" : [
			4.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			6.2
		],
		"range_size" : [
			176
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"tessellata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			8.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			130
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"tetanophylla" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			13
		],
		"Stipule_length_median" : [
			0.5
		],
		"Phyllode_length__median" : [
			23.25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"tetragonocarpa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			0.7
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			13
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"tetragonophylla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered",
			"fasciculate"
		],
		"plant_height" : [
			3.5
		],
		"genome_size" : [
			1.219
		],
		"seed_mass" : [
			5.8
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			668
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"tetraneura" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.35
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			50
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"tetraptera" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.35
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			3.25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"thoma" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			15
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"thomsonii" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			8.8
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			41
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			122.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"tindaleae" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			237.9
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.7
		],
		"range_size" : [
			30
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			8.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"tingoorensis" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			140
		],
		"Pulvinus_length_median" : [
			7.5
		]
	},
	"tolmerensis" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			177.5
		],
		"Pulvinus_length_median" : [
			5.5
		]
	},
	"toondulya" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			75.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"torringtonensis" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"torticarpa" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			3.5
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"torulosa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			8.15
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			19.3
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.3
		],
		"range_size" : [
			290
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			125
		],
		"Pulvinus_length_median" : [
			3.25
		]
	},
	"trachycarpa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			55.3
		],
		"first_leaf__pinnae_pairs" : [
			3.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.3
		],
		"range_size" : [
			65
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			57.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"trachyphloia" : {
		"section_taxonomy" : [
			"botrycephalae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			9.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			10.8
		],
		"first_leaf__pinnae_pairs" : [
			4.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			6.0
		],
		"range_size" : [
			13
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"translucens" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			14.4
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			113
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"tratmaniana" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			34
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"trigonophylla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			14.9
		],
		"first_leaf__pinnae_pairs" : [
			2.5
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.7
		],
		"range_size" : [
			17
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"trinalis" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			6
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			67.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"trinervata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			13.9
		],
		"first_leaf__pinnae_pairs" : [
			4.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			5.3
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			25
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"trineura" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			6.4
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.5
		],
		"range_size" : [
			65
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			50
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"triptera" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4.5
		],
		"genome_size" : [
			1.555
		],
		"seed_mass" : [
			7.7
		],
		"first_leaf__pinnae_pairs" : [
			2.2
		],
		"_leaflet__pairs_2nd_leaf" : [
			1.8
		],
		"range_size" : [
			102
		],
		"Stipule_length_median" : [
			0.3
		],
		"Phyllode_length__median" : [
			27.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"triptycha" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			50.7
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.6
		],
		"range_size" : [
			36
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			85
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"triquetra" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			6.3
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			53
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			17.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"tropica" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			20.1
		],
		"first_leaf__pinnae_pairs" : [
			3.5
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			55
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			125
		],
		"Pulvinus_length_median" : [
			7.5
		]
	},
	"truculenta" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.45
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			10
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"trudgeniana" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			19
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"trulliformis" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"truncata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			18
		],
		"Stipule_length_median" : [
			2.25
		],
		"Phyllode_length__median" : [
			17
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"tuberculata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"tumida var. extenta" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			50.3
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.8
		],
		"range_size" : [
			295
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			210
		],
		"Pulvinus_length_median" : [
			8
		]
	},
	"tumida var. kulparn" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			88.2
		],
		"first_leaf__pinnae_pairs" : [
			3.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.5
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			90
		],
		"Pulvinus_length_median" : [
			4.5
		]
	},
	"tumida var. tumida" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"paniculate",
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			8.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			48.1
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.7
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			150
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"tysonii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			101.0
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.0
		],
		"range_size" : [
			35
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ulicifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"subwhorled",
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			12.9
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			304
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			10
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ulicifolia var. brownii " : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			13.1
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"ulicina" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.65
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			12.7
		],
		"first_leaf__pinnae_pairs" : [
			1.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			32
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			13.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"uliginosa" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.45
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			2
		],
		"Phyllode_length__median" : [
			7
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"umbellata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			9.3
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.7
		],
		"range_size" : [
			160
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			97.5
		],
		"Pulvinus_length_median" : [
			5
		]
	},
	"umbraculiformis" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			37
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"uncifera" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			16
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			35
		],
		"Pulvinus_length_median" : [
			2
		]
	},
	"uncifolia" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			24
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"uncinata" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			1.776
		],
		"seed_mass" : [
			36.5
		],
		"first_leaf__pinnae_pairs" : [
			3.8
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.5
		],
		"range_size" : [
			12
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			31
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"uncinella" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.65
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			2.3
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.8
		],
		"range_size" : [
			48
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			22.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"undoolyana" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			8
		],
		"genome_size" : [
			1.296
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			185
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"undosa" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.9
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			10
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			32.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"undulifolia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			1.669
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			19
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			24
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"unguicula" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			0.85
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"unifissilis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.425
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			24
		],
		"Stipule_length_median" : [
			2.75
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"urandangi" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			9.2
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.3
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"urophylla" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			242.0
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			43
		],
		"Stipule_length_median" : [
			5
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"valida" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			1.75
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"validinervia" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			19.9
		],
		"first_leaf__pinnae_pairs" : [
			3.5
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			79
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			6
		]
	},
	"varia var. crassinervis" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"varia var. parviflora" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			3.7
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			72
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"varia var. varia" : {
		"section_taxonomy" : [
			"pulchellae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"no phyllodes"
		],
		"plant_height" : [
			0.45
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"vassalii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			1.5
		],
		"Phyllode_length__median" : [
			6
		],
		"Pulvinus_length_median" : [
			0.5
		]
	},
	"venulosa" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			20.8
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.4
		],
		"range_size" : [
			56
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			70
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"verniciflua (Baccus Marsh variant)" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			1.696
		],
		"seed_mass" : [
			12.6
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.7
		],
		"range_size" : [
			266
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"verniciflua (exudans variant)" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			3
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"verniciflua (graveolens variant)" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"verniciflua (typical variant)" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4.5
		],
		"genome_size" : [
			1.696
		],
		"seed_mass" : [
			12.6
		],
		"first_leaf__pinnae_pairs" : [
			3.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.7
		],
		"range_size" : [
			266
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			45
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"veronica" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"verricula" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			65
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			22.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"verticillata subsp. cephalantha" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			1
		],
		"Phyllode_length__median" : [
			7.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"verticillata subsp. ovoidea" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled",
			"subwhorled",
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			1.25
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"verticillata subsp. ruscifolia" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled",
			"subwhorled"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			1.25
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"verticillata subsp. verticillata" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled",
			"subwhorled",
			"fasciculate"
		],
		"plant_height" : [
			10
		],
		"genome_size" : [
			1.661
		],
		"seed_mass" : [
			11.8
		],
		"first_leaf__pinnae_pairs" : [
			3.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.3
		],
		"range_size" : [
			260
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"vestita" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			1.761
		],
		"seed_mass" : [
			30.0
		],
		"first_leaf__pinnae_pairs" : [
			3.3
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.5
		],
		"range_size" : [
			35
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"victoriae" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			9
		],
		"genome_size" : [
			1.287
		],
		"seed_mass" : [
			34.7
		],
		"first_leaf__pinnae_pairs" : [
			3.7
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.0
		],
		"range_size" : [
			832
		],
		"Stipule_length_median" : [
			7
		],
		"Phyllode_length__median" : [
			35
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"vincentii" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			2.5
		],
		"Phyllode_length__median" : [
			4.75
		],
		"Pulvinus_length_median" : [
			0.35
		]
	},
	"viscidula" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			76
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"viscifolia" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.65
		],
		"genome_size" : [
			1.513
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			31
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"vittata" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			3
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			42.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"volubilis" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			5
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			7.75
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"walkeri" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			17
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"wanyu" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			94.5
		],
		"first_leaf__pinnae_pairs" : [
			3.5
		],
		"_leaflet__pairs_2nd_leaf" : [
			3.3
		],
		"range_size" : [
			41
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			115
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"wardellii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			6
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			11
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			137.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"warramaba" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			60
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"wattsiana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			13.7
		],
		"first_leaf__pinnae_pairs" : [
			4.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.5
		],
		"range_size" : [
			18
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			50
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"wattsiana (Nectar Brook variant)" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			47.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"websteri" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			7
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			82.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"whibleyana" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1.75
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			19.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"whitei" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			22
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			100
		],
		"Pulvinus_length_median" : [
			1
		]
	},
	"wickhamii subsp. cassitera" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			0.5
		]
	},
	"wickhamii subsp. parviphyllodinea" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			7.5
		],
		"Pulvinus_length_median" : [
			0.4
		]
	},
	"wickhamii subsp. viscidula" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			13.5
		],
		"Pulvinus_length_median" : [
			0.4
		]
	},
	"wickhamii subsp. wickhamii" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid",
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			6.6
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.9
		],
		"range_size" : [
			128
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			17.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"wilcoxii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			3
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			95
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"wilhelmiana" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			135
		],
		"Stipule_length_median" : [
			0.75
		],
		"Phyllode_length__median" : [
			20
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"willdenowiana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"white to cream",
			"pale yellow"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.45
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			41
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			12.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"williamsiana" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"pale yellow",
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			8
		],
		"Stipule_length_median" : [
			0.65
		],
		"Phyllode_length__median" : [
			66.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"williamsonii" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			6.8
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.5
		],
		"range_size" : [
			9
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			65
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"willingii" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"wilsonii" : {
		"section_taxonomy" : [
			"plurinerves"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.25
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			4
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			145
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"wiseana" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			41
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			12.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"woodmaniorum" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"unknown"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"unknown"
		],
		"Phyllode_arrangement" : [
			"unknown"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"xanthina" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			4
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			24.6
		],
		"first_leaf__pinnae_pairs" : [
			3.5
		],
		"_leaflet__pairs_2nd_leaf" : [
			4.0
		],
		"range_size" : [
			14
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			80
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"xanthocarpa" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"ellipsoid"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			23
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			77.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"xerophila" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			4
		],
		"Phyllode_length__median" : [
			15
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"xerophila var. xerophila" : {
		"section_taxonomy" : [
			"phyllodineae"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			0.65
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			23
		],
		"Stipule_length_median" : [
			4
		],
		"Phyllode_length__median" : [
			26
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"xiphophylla" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			562.1
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			60
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			87.5
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"yirrkallensis" : {
		"section_taxonomy" : [
			"unknown"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			1
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			3.2
		],
		"first_leaf__pinnae_pairs" : [
			2.0
		],
		"_leaflet__pairs_2nd_leaf" : [
			2.0
		],
		"range_size" : [
			42
		],
		"Stipule_length_median" : [
			0.5
		],
		"Phyllode_length__median" : [
			30
		],
		"Pulvinus_length_median" : [
			
		]
	},
	"yorkrakinensis subsp. acrita" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			120
		],
		"Pulvinus_length_median" : [
			2.25
		]
	},
	"yorkrakinensis subsp. yorkrakinensis" : {
		"section_taxonomy" : [
			"juliflorae"
		],
		"Inflorescence_shape" : [
			"cylindrical"
		],
		"Inflorescence_colour" : [
			"lemon yellow to golden"
		],
		"Inflorescence_arrangement" : [
			"racemose"
		],
		"Phyllode_arrangement" : [
			"scattered"
		],
		"plant_height" : [
			2.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			95
		],
		"Stipule_length_median" : [
			
		],
		"Phyllode_length__median" : [
			62.5
		],
		"Pulvinus_length_median" : [
			2.25
		]
	},
	"zatrichota" : {
		"section_taxonomy" : [
			"lycopodifolia"
		],
		"Inflorescence_shape" : [
			"globular"
		],
		"Inflorescence_colour" : [
			"unknown"
		],
		"Inflorescence_arrangement" : [
			"simple"
		],
		"Phyllode_arrangement" : [
			"whorled"
		],
		"plant_height" : [
			1.5
		],
		"genome_size" : [
			
		],
		"seed_mass" : [
			
		],
		"first_leaf__pinnae_pairs" : [
			
		],
		"_leaflet__pairs_2nd_leaf" : [
			
		],
		"range_size" : [
			2
		],
		"Stipule_length_median" : [
			1.75
		],
		"Phyllode_length__median" : [
			13
		],
		"Pulvinus_length_median" : [
			
		]
	}
},
			tree: '((Parachidendron_pruinosum:0.040978488177549344,Paraserianthes_lopantha:0.034642564085327066):0.008225411728531277,(((Acacia_semicircinalis:0.03434179368091353,(Acacia_adinophylla:0.01786382226553121,(Acacia_aphanoclada:0.027802263108902575,(Acacia_inaequilatera:0.01558390456025574,Acacia_marramamba:0.019601969790913026):0.023018559219676327):0.014929592849143497):0.0024442849929099675):0.008683811906470024,(((Acacia_cuspidifolia:0.06299943514895329,Acacia_pickardii:0.01645944311692754):0.0121585186823992,(Acacia_dempsteri:0.032566025955212574,(Acacia_pyrifolia:0.0071452531601057245,Acacia_strongylophylla:0.017164465366973608):0.01722271161462388):0.008314975195505336):0.003341081648040589,(Acacia_congesta:0.030736020930088787,(Acacia_victoriae:0.02555846916881857,(Acacia_alexandri:0.036609094620088156,(Acacia_synchronicia:0.024009300466707933,(Acacia_ryaniana:0.009268657025450128,Acacia_chartacea:0.009124716185091142):0.009892444026079472):0.0036195262494598535):0.002983001274919461):0.007431997754654834):0.0038963238393163457):0.003447095776264786):0.020710644515367083,((Acacia_bakeri:0.0406532246060356,(Acacia_saligna:0.01605706157497258,Acacia_gregorii:0.04666711879741278):0.0122988067128805):0.013003540227849025,(((Acacia_longispinea:0.03535433588997847,(Acacia_carnosula:0.021520197611476832,Acacia_aculeatissima:0.025735958495406053):0.0010528301840497245):0.0056303380579131035,((Acacia_complanata:0.0160112409703069,(Acacia_hylonoma:0.10026443746155886,(Acacia_simsii:0.004790599615874552,Acacia_multisiliqua:0.003129044232120043):0.01034191936194534):0.010455294514837787):0.008435259842535348,(Acacia_obtecta:0.05318924678026335,(Acacia_siculiformis:0.17440277817272173,(Acacia_maitlandii:0.030310041798124243,(Acacia_excelsa:0.0034742163874285914,Acacia_estrophiolata:0.01749088750396316):0.036188298217544324):0.003970538247807104):0.0022009634031501524):0.0021795799679573125):0.01037196303517321):0.018474860907340795,((((((Acacia_amblygona:0.017925994235234805,Acacia_pravifolia:0.009076830450001239):0.00852214519415262,(Acacia_continua:0.01339727698064161,Acacia_spinescens:0.05816657976695):0.02765301032108522):0.016886024354797108,((Acacia_basedowii:0.017267858649590212,Acacia_oxyclada:0.005269222752839808):0.011530549489063152,(Acacia_acutata:0.010688388737661064,Acacia_acanthoclada:0.018256097900031576):0.012797660709407938):0.012622789248035476):0.014730560543512738,((Acacia_woodmaniorum:0.015012467086362752,(Acacia_pterocaulon:0.019905281039812678,Acacia_aphylla:0.03617370600329728):0.004481211513419681):0.015656464036991585,(Acacia_ashbyae:0.03632111515778433,((Acacia_ampliceps:0.004258070238647604,Acacia_salicina:0.008331830159986536):0.005016461315367399,((Acacia_telmica:0.014036826294914068,Acacia_cupularis:0.0038513370210943865):0.0022547615529197595,((Acacia_bidentata:0.024279244424319057,Acacia_tysonii:0.005775146283977378):0.007429297874933377,(Acacia_bivenosa:0.014881014956115823,((Acacia_didyma:7.15157311287351E-7,Acacia_ligulata:0.006351933899563622):7.15157311287351E-7,(Acacia_rostellifera:0.0022462698910826195,Acacia_xanthina:0.004146955725092855):7.547059296713343E-4):7.446103031933105E-4):0.0025933226155194777):0.0041335404967143274):7.901191593841506E-4):0.012861328579005737):0.03130129809121324):0.003100241594786196):0.005708458962146279,(((Acacia_spathulifolia:0.03310097466922879,(Acacia_scirpifolia:7.15157311287351E-7,Acacia_blakelyi:0.014014307471595266):0.015411008694633743):0.02230477782769391,(Acacia_porcata:0.02629805015241707,(Acacia_hypermeces:0.010744102613903794,((Acacia_anasilla:0.02056845232519583,Acacia_adoxa:0.0020936898306467555):0.004322225985847333,(Acacia_lycopodiifolia:0.013256107855375565,(Acacia_asperulacea:0.005008613979308796,Acacia_perryi:0.007998414363542011):0.0017507022419782636):0.002501097319469847):0.003236661221639653):0.01233425873446553):0.013360302598167506):0.008006853623799048,((Acacia_extensa:0.03823628862691572,Acacia_gonophylla:0.025100704591826256):0.010697746627740673,((Acacia_applanata:0.07025839178387261,Acacia_alata:0.0200478751843621):0.053632202564290715,((Acacia_shuttleworthii:0.021965368068940977,(Acacia_pentadenia:0.016368303625869274,(Acacia_browniana:0.018042432907854594,(Acacia_empelioclada:0.010505603036224748,(Acacia_nigricans:0.003884992533128212,(Acacia_gilbertii:0.007252507476955272,Acacia_leioderma:0.011650934453316025):0.005194117348315097):0.0012518548226619075):0.003879075746190813):0.004237123170198864):0.024078460499485338):0.012010132730842893,(((Acacia_epacantha:0.016228161782737116,Acacia_fagonioides:0.016206507203780307):0.0029864288459414134,(Acacia_pulchella:0.06050673088358763,(Acacia_drummondii:0.010672510183989375,Acacia_guinetii:0.0018185552327708576):0.006973733623335865):0.00405998424949075):0.04008422036809639,(Acacia_jacksonioides:0.054671686099938444,(Acacia_pygmaea:0.04760423795325733,((Acacia_incrassata:0.05130742586295528,(Acacia_biflora:0.015541918908888258,Acacia_phlebopetala:0.019345968925610607):0.02632719017708529):0.015880867519423802,((Acacia_heterochroa:0.021595057732055306,Acacia_clydonophora_:0.019128566941978814):7.15157311287351E-7,(Acacia_celastrifolia:0.018065445530626584,Acacia_myrtifolia:0.02707634839929865):0.03347077135399404):0.01928516068144942):0.0023339790599610777):0.00857516209412651):7.151573112595955E-7):0.008733869067675648):0.006309741695870508):0.0073390707270503674):0.0029010117656092516):0.004153552620170475):0.01202938461266781,((((Acacia_gelasina:0.010231669524384451,Acacia_subrigida:0.021778697850626805):0.01006278091785981,(Acacia_praelongata:0.017668556065794316,(Acacia_pachyacra:0.003283743265044714,Acacia_murrayana:0.006121968945630829):0.005859561095976851):0.01162471271454546):0.019550045875188216,((Acacia_imbricata:0.006926792870763893,(Acacia_triquetra:0.003850073330251641,Acacia_acinacea:0.009023220013489985):0.002276921197479187):0.04475727846523875,((Acacia_iteaphylla:0.0190571755297147,Acacia_suaveolens:0.01783057002233962):0.029755618606384565,(Acacia_anthochaera:0.0029167277226607724,(Acacia_camptoclada:0.014672369241857414,Acacia_prainii:0.0031749726745148588):9.5936227520238E-4):0.01081278395654614):0.015977009424507166):0.009610287613573715):0.008660442668027457,(Acacia_peuce:0.03956131880247779,(((Acacia_subsessilis:0.00494234092138357,Acacia_diallaga:6.540957946330472E-4):0.05278193435114814,((Acacia_ixodes:0.0229703516797842,(Acacia_calantha:0.009393897508872762,(Acacia_melleodora:0.01118902346685638,(Acacia_jensenii:0.03251725600295774,(Acacia_sabulosa:7.15157311287351E-7,Acacia_dictyophleba:0.0114547947814235):6.701435501387798E-4):0.0015926917284676823):0.012839062042622529):0.007348621626485197):0.01986833756695333,(((Acacia_benthamii:0.002707351970299171,Acacia_acuaria:7.15157311287351E-7):0.03563440470657428,((Acacia_cavealis:0.021941345411860547,Acacia_auronitens:0.013017030624251663):0.024373817681719673,(Acacia_latipes:7.15157311287351E-7,(Acacia_adnata:0.002877923436760993,Acacia_cochlearis:0.014156476761237324):0.006239207446078199):0.03226685938030391):0.003155599196906139):0.012092049970587382,((Acacia_acanthaster:0.025007855622370012,Acacia_tetragonophylla:0.017154187956419792):0.004316091594026572,((Acacia_declinata:0.007659238099206156,Acacia_curvata:0.019062749951179375):0.01611699523766083,(Acacia_leptoneura:0.051263568566665446,(Acacia_campylophylla:0.019061322030982764,(Acacia_aulacophylla:0.0053110231407460795,(Acacia_heteroclita:0.0033738888749820506,((Acacia_brachyphylla:0.016030530942523796,Acacia_fragilis:0.006247307607614161):0.0024315830875908384,(Acacia_stanleyi:7.15157311287351E-7,Acacia_assimilis:0.003038968657613522):0.010389084436872892):7.151573113151066E-7):0.001136887174962714):0.001697160745615739):0.005267508544892829):0.007245718506591808):0.002311859232020569):0.0044361526867040535):0.008817540649392386):0.003751571825797939):0.0012967877038015385,(((Acacia_saxatilis:0.021011571624042075,(Acacia_bracteolata:0.010056567345221035,(Acacia_carneorum:0.019820225453609175,Acacia_atrox:0.005763760331033957):0.009652616970450667):0.013996745266236038):0.002012456856871625,((Acacia_pruinocarpa:0.0390025393597572,(Acacia_hystrix:0.029753432164970534,((Acacia_rhamphophylla:0.012529716389725998,(Acacia_glaucoptera:0.003502058717498674,Acacia_bifaria:0.004366491887237645):0.0022110912968059115):0.007718263560336225,(Acacia_excentrica:0.007147236040019628,(Acacia_halliana:0.01576352078953691,(Acacia_acoma:0.004850428103737703,Acacia_glaucissima:0.011570376548308059):0.0052458500364122584):0.003121167761262311):0.0037414275897788007):0.014704566958374687):0.004665750074746955):4.1985129338717453E-4,((Acacia_latescens:0.016487543532395454,((Acacia_platycarpa:0.005110703890665341,Acacia_dunnii:0.013342405576972555):0.008870756628970966,(Acacia_retivenea:0.006199667356323629,Acacia_auricoma:0.01773794231876963):0.006132146850814341):0.016868635623946193):0.02640973019485246,(Acacia_andrewsii:0.01945215674524478,(Acacia_baxteri:0.03439913531163896,((Acacia_cedroides:0.023312622275100642,(Acacia_costata:0.02389756393436049,Acacia_ataxiphylla:0.03356764767187129):0.0012391610478653947):0.006095735330077706,(Acacia_aemula:0.00661189442945892,(Acacia_huegelii:0.030151277415431943,(Acacia_semitrullata:0.02697860769183752,(Acacia_kybeanensis:7.15157311287351E-7,Acacia_hastulata:7.15157311287351E-7):0.013802333034013015):0.013492700925966106):0.0011687613202290836):7.15157311287351E-7):0.004341514983867478):0.0028667980777380975):0.010123594295354199):0.00408004874066234):0.004803190455809653):0.0025901108900201475,((Acacia_spectabilis:0.025814298757074527,(Acacia_validinervia:0.030455917167735436,((((Acacia_latisepala:0.03046829068871229,Acacia_elata:0.025609962964024152):0.0027270272567139486,(Acacia_terminalis:0.03795904717781601,(Acacia_obtusata:0.013162759225385623,(Acacia_mitchellii:0.015043688187603044,Acacia_gittinsii:0.017413418094932798):0.0026674039300361163):0.008877524147034382):8.13939255688706E-4):0.0016206434087856492,(((Acacia_hakeoides:0.00871764403202574,(Acacia_brachybotrya:0.0018839699237530039,Acacia_argyrophylla:8.475312324308093E-4):0.006147596577781467):0.004020893615634513,(Acacia_gladiiformis:0.018268755515091495,(Acacia_beckleri:0.007427447868038783,(Acacia_pedina:7.151573112595955E-7,Acacia_pycnantha:0.001682617452323898):0.008222657150453894):0.003656626214569858):0.004782768603398213):7.15157311287351E-7,((Acacia_euthycarpa:0.007519039874645528,((Acacia_gillii:0.010066643850289686,Acacia_notabilis:0.004304711408569778):0.003808377693469228,(Acacia_subulata:0.006112189217185093,(Acacia_wattsiana:7.151573113151066E-7,Acacia_hemiteles:0.003132679183444953):0.0014915960367936076):0.0044590187089074695):7.151573113151066E-7):7.351310857370008E-4,(Acacia_jennerae:0.013055077937025344,((Acacia_calamifolia:0.005164490918221937,Acacia_araneosa:0.00299235369745926):0.0024719752879217016,((Acacia_aestivalis:0.0070414384733543944,Acacia_meisneri:8.401342085392893E-4):0.0015515436769412694,((Acacia_alcockii:0.011243537684789973,(Acacia_anceps:0.007257013759350506,(Acacia_nematophylla:0.009898498952199464,Acacia_retinodes:0.009597535836242899):0.0015018929286263472):0.0028491041420348195):0.004269336180900141,(Acacia_rivalis:0.006126278553946485,(Acacia_harveyi:0.003673558456826931,(Acacia_amblyophylla:0.02817463112802346,(Acacia_microbotrya:7.15157311287351E-7,Acacia_bartleana:7.15157311287351E-7):0.00781722900248552):0.0035384385041229427):1.3903275851850916E-4):6.865363419380488E-4):7.151573113151066E-7):0.0029946604804735877):7.151573113151066E-7):0.003956082367200603):8.394905408916076E-4):0.0055983997371467364):0.0014709307999059285,((Acacia_macradenia:0.01777785969549256,(Acacia_bancroftiorum:7.15157311287351E-7,Acacia_falcata:7.15157311287351E-7):0.0101175569085723):0.0052122810890926075,(Acacia_decora:0.014809431050881255,(Acacia_rubida:0.016584553508694644,((Acacia_semilunata:0.02152117127883746,(Acacia_beadleana:0.027513756203502715,(Acacia_pubicosta:0.03597978283677339,(Acacia_conferta:0.006512617956749123,Acacia_tindaleae:0.003857872093361886):0.006546789209964182):7.15157311287351E-7):0.002651888580378542):0.004461496127963288,((Acacia_cultriformis:0.012887778430722974,((Acacia_anaticeps:0.027858547135011597,Acacia_chrysotricha:0.010414519750989448):0.00983649843330553,(((Acacia_linearifolia:0.00518734163479076,Acacia_adunca:0.012630178982720147):0.004578513500855613,(Acacia_neriifolia:0.006488443046510944,(Acacia_pustula:0.0013725680771742854,Acacia_ingramii:0.008539542501865144):7.15157311287351E-7):0.0030525548810619585):0.0055329055577376385,(Acacia_leucolobia:0.00969793854294071,(Acacia_boormanii:0.011515324382404352,(Acacia_clunies_rossiae:0.003636194039952717,((Acacia_betchei:0.0026784543755022927,Acacia_perangusta:0.001158410177193786):0.0012736790734198256,(Acacia_fimbriata:0.0015303767134557111,(Acacia_prominens:7.15157311287351E-7,Acacia_pravissima:0.008599453938654356):0.008829758383279207):0.005460566960843571):8.597719221589417E-4):0.0034239411918313423):0.005223031860969091):0.007517659502881302):0.002760302966830358):0.0012044476137290094):8.696081595550575E-4,((Acacia_angusta:0.018497942588082322,Acacia_storyi:0.007660012568188546):0.0016178558691861689,(((Acacia_falciformis:0.005685684294748389,(Acacia_obliquinervia:0.005792195359215491,(Acacia_acrionastes:0.003909086725554511,(Acacia_penninervis:0.0013009595477300184,(Acacia_binata:0.005667422897905616,(Acacia_mabellae:0.0039024104246929148,Acacia_binervata:8.090509860680939E-4):0.0018332509952342368):0.0015527978795139563):7.446821535803116E-4):3.4712783613252696E-4):8.28876603932327E-4):8.179000094095945E-4,((Acacia_aureocrinita:0.0033115004486202193,Acacia_uncinata:0.0106211936194191):0.006609904953883056,(Acacia_dorothea:0.009912608774082843,(Acacia_vestita:0.00554108314328336,(Acacia_caesiella:0.022305881645962172,((Acacia_macnuttiana:0.004628408655366678,Acacia_covenyi:0.01885803719901641):0.0011269914241286427,(Acacia_saliciformis:0.001665376039492128,(Acacia_barringtonensis:0.010621152047553317,(Acacia_linifolia:0.004917112716979283,Acacia_cremiflora:0.007404572628010309):7.151573112595955E-7):0.004481464626736792):7.3032860916869E-4):7.514209410215966E-4):7.15157311287351E-7):7.15157311287351E-7):7.15157311287351E-7):7.15157311287351E-7):0.0025980464648082124,((Acacia_attenuata:0.008951980250786196,(Acacia_chinchillensis:0.015405696812080316,Acacia_buxifolia:0.022172755661108434):7.151573113151066E-7):0.001924199495399015,((Acacia_polybotrya:0.0021023445663936324,Acacia_debilis:0.00830936801850879):7.15157311287351E-7,((Acacia_cardiophylla:0.003421043042484806,((Acacia_baileyana:0.0016176423800172146,Acacia_nanodealbata:0.003451665813281324):0.0014802307717058372,(Acacia_dealbata:0.0017171220534523135,(Acacia_jonesii:0.001456725624900096,(Acacia_trachyphloia:0.0037542690998977335,(Acacia_blayana:0.001624511947131091,(Acacia_decurrens:7.151573113151066E-7,Acacia_silvestris:0.0020710754513579843):0.0017209332656217824):7.151573112595955E-7):7.151573113151066E-7):0.0022094995304386134):7.15157311287351E-7):0.002219532380067335):7.15157311287351E-7,((Acacia_filicifolia:0.0034321594780659104,Acacia_glaucocarpa:0.0022261214334261814):7.15157311287351E-7,(Acacia_leucoclada:0.007993674352375857,((Acacia_dangarensis:0.014902463153970591,(Acacia_jucunda:0.002687921109329583,Acacia_podalyriifolia:0.004684227243866801):0.0023382448299727188):0.0031898182631659167,((Acacia_cangaiensis:9.576651696435179E-4,((Acacia_oshanesii:0.004473765950141706,Acacia_muelleriana:0.00677330500292983):7.151573113151066E-7,((Acacia_schinoides:7.5642637201076E-4,Acacia_pruinosa:8.555572839036019E-4):0.0022429230180227855,(Acacia_fulva:0.006622654415573026,Acacia_mollifolia:0.004525878940236344):0.001072108200709354):8.194849540328342E-4):7.961701374236685E-4):7.151573112595955E-7,((Acacia_pedleyi:0.003138429471034543,Acacia_loroloba:7.151573113151066E-7):0.002598527799332395,((Acacia_parramattensis:0.0014972993265941204,(Acacia_deanei:0.0016325846316250225,Acacia_olsenii:7.15157311287351E-7):0.003506055055095797):0.0014785152635542198,(Acacia_irrorata:0.0015078772163922005,(Acacia_parvipinnula:0.006854796844660754,(Acacia_constablei:0.03623150900131736,Acacia_mearnsii:8.596395659404843E-4):7.15157311287351E-7):7.536479575195321E-4):7.573318864003975E-4):7.151573112595955E-7):8.167708025026976E-4):7.151573113151066E-7):8.530095246268576E-4):7.15157311287351E-7):9.146637034655458E-4):0.0018314429280253397):9.147109022095423E-4):7.151573112595955E-7):0.002747251778999371):7.151573113151066E-7):0.001865608189002943):7.052728414740361E-4):0.0026165337715410852):0.001526647186874397):0.0016580883984176065):0.00836412999427913):9.351921998057011E-4):0.021568481756086333,((((Acacia_triptera:0.008236478912540063,Acacia_rhigiophylla:0.001903735020688191):0.012903383425146964,((Acacia_alpina:0.00967721414330902,(Acacia_courtii:0.006064724144313582,Acacia_orites:0.010503748947443076):7.15157311287351E-7):6.279597933415704E-4,(Acacia_phlebophylla:0.012163360195051598,(Acacia_obtusifolia:0.014012355014167976,(Acacia_longissima:0.0072190366537357165,(Acacia_axillaris:0.028024163512604477,(Acacia_mucronata:0.0049868665970976556,(Acacia_longifolia:0.004711349444623286,Acacia_floribunda:0.01636282790156604):0.001536840434117781):9.47247356769515E-4):7.151573112595955E-7):0.003035859546208164):0.0011488149762554634):0.004066108149808456):0.0016226659231394214):0.00234672319575141,(((Acacia_havilandiorum:0.012792892475459838,(Acacia_masliniana:0.01275686862222547,Acacia_patagiata:0.011623419652099953):0.005534545846312772):7.15157311287351E-7,(Acacia_colletioides:0.019833844487901264,(Acacia_delphina:0.05177219821218429,(Acacia_simulans:0.03011125736730899,Acacia_argutifolia:0.015260556807868836):0.003894253259379421):0.031594790460570316):0.0017436956298745587):0.0016044799746040839,(((Acacia_mackeyana:0.005206538108393166,Acacia_nyssophylla:0.005219622740774421):0.00923240462110353,(Acacia_lineolata:0.013732522990822671,Acacia_inceana:0.013707740699757748):5.22461586923928E-4):0.005345813508601027,((Acacia_baueri:0.023147288229392105,((Acacia_oswaldii:0.006006182620980682,Acacia_calcicola:8.5428857412162E-4):0.009952111801543123,(Acacia_rigens:0.011848369646817625,(Acacia_hexaneura:0.006483749467914579,Acacia_enterocarpa:0.006074934277353339):0.004477564226365416):0.005404109676786589):0.0023955099931028123):0.005703076561865139,((Acacia_dawsonii:0.026749280145658444,Acacia_montana:0.0092014888962689):0.0061390650373507605,((Acacia_verricula:0.012684095719831479,(Acacia_brachypoda:0.011220075457401307,(Acacia_consobrina:0.016665940357536907,(Acacia_auratiflora:0.03831504008559988,(Acacia_wilhelmiana:0.006509509816567616,(Acacia_ixiophylla:0.006153778118501874,Acacia_dictyoneura:0.006614316117281194):7.833239286508531E-4):0.0062484159902884695):7.151573113151066E-7):7.151573112595955E-7):0.004238448008754503):0.008429711034310838,(((Acacia_cyclops:0.04303892889323452,Acacia_stenophylla:0.06316482648785338):0.0040650139628879145,(Acacia_brachyclada:0.029399710995825112,(Acacia_redolens:0.01803125565389474,((Acacia_georginae:0.014491689676515151,(Acacia_argyrodendron:0.0013059342759877135,Acacia_harpophylla:0.002154616942290466):0.011188594650604733):0.006715939423674322,(Acacia_sclerophylla:0.014662460189078769,(((Acacia_amyctica:0.0031216983168460555,Acacia_ancistrophylla:0.001877415454128395):7.151573112595955E-7,(Acacia_enervia:0.006129382889836554,Acacia_papyrocarpa:0.015039563092635322):0.001975261934796191):0.003985774249027851,((Acacia_omalophylla:7.15157311287351E-7,Acacia_melvillei:7.15157311287351E-7):0.003029681043767246,((Acacia_microsperma:7.151573112595955E-7,Acacia_maranoensis:0.0010534979960573065):0.001137157599918448,((Acacia_cana:0.00321285779195174,(Acacia_latzii:0.0022596239664132434,Acacia_sibilans:0.0016321843081744947):0.003926011693354908):0.005251623483400192,(Acacia_pendula:0.00871269702613206,(Acacia_loderi:0.0063319505002154275,(Acacia_maconochieana:0.01383512411546764,Acacia_tephrina:0.006151989208348363):8.366373115773762E-4):0.0037393661100476316):0.00149780205395178):0.006583477416129746):0.002212908419134574):0.012418767321067503):0.0011499549810511378):0.003952174417926724):0.00611121136168008):0.00673422981891475):6.245497519160315E-4):0.0016862067134571779,(Acacia_dolichophylla:0.043518074842110566,((Acacia_barattensis:0.021374604282199422,(Acacia_crassiuscula:0.009281513636696659,Acacia_spongolitica:0.003098946981805628):0.009255447350437596):0.005249990946861738,(((Acacia_elongata:0.005762222810036632,(Acacia_baeuerlenii:0.009968648840410432,Acacia_venulosa:0.003650875736425585):0.0011492619570985796):0.008507218057561827,(Acacia_genistifolia:0.01367289962827914,(Acacia_tessellata:0.004509818213870032,(Acacia_melanoxylon:0.009063086161052475,Acacia_implexa:0.024681019665646065):0.0065915855804785095):0.010101926657103577):0.0024712585186929537):0.0033908230144090723,(Acacia_viscidula:0.05369320869509564,((Acacia_flexifolia:0.008280076575074985,(Acacia_errabunda:0.010142511145861843,(Acacia_menzelii:0.015361474606763736,(Acacia_lineata:0.001271002025232365,Acacia_rhetinocarpa:0.0029180330421209044):0.0021436951134223836):0.005306265973868074):8.443437155705169E-4):7.573454178020911E-4,((Acacia_paradoxa:0.01497433884391633,(Acacia_dodonaeifolia:0.012025280216102718,Acacia_aspera:0.0026423542264326083):0.0010162844917726566):7.151573113151066E-7,((Acacia_cognata:0.0028847671994340907,Acacia_howittii:0.0019506456727544919):0.0012891042463281654,(Acacia_verniciflua:0.002140656876143565,(Acacia_gnidium:0.005850882573264299,Acacia_ausfeldii:7.15157311287351E-7):7.243313607727953E-4):0.002173516259721009):7.280742255716399E-4):0.0023091986021295807):0.004470334555741973):0.0023893207339294453):0.0017802794476079464):0.0015317575642483927):0.004458592437235509):0.004160852015246741):0.0065576853193394236):0.0014231862769354953):0.0014465507779810594):0.004618674144293733):0.002603511776329448):0.003863068806664205,(((Acacia_xiphophylla:0.01406957531459041,Acacia_pachycarpa:0.009186395387635105):0.022553525780505512,((Acacia_cuthbertsonii:0.03258089198281908,Acacia_wanyu:0.001949801504605525):0.037958104296143325,(Acacia_oldfieldii:0.0028813554988194046,(Acacia_jibberdingensis:0.0022463058622689824,Acacia_karina:0.0022520673080551057):0.002120844403458916):0.010130946381992384):0.004226783630659509):0.0021848503676270004,((Acacia_sericophylla:0.007587509285341687,Acacia_coriacea:7.151573113151066E-7):0.031562044883144846,((Acacia_drepanophylla:0.025240497609312296,((Acacia_sessilispica:0.009735080077711955,Acacia_neurophylla:0.015191600461080784):7.151573113151066E-7,(Acacia_denticulosa:0.001608175675475193,(Acacia_nuperrima:0.02594763420035459,(Acacia_acuminata:0.002601639684921997,Acacia_burkittii:0.005004643661031816):0.006278702804507846):0.0032662444365007814):0.004607598507300803):0.009263492055494482):0.0027803874200853507,(Acacia_aciphylla:0.0038697664800469433,((Acacia_beauverdiana:0.0010537625217203472,Acacia_sibina:0.009018454001707005):0.005001520997056252,(Acacia_exilis:0.014527361996034799,((Acacia_hamersleyensis:0.013233462587675993,((Acacia_citrinoviridis:0.001043030918942145,Acacia_umbraculiformis:7.151573112595955E-7):0.0016329502097711113,(Acacia_olgana:0.007961072590437768,Acacia_tarculensis:7.151573112595955E-7):7.151573113151066E-7):0.004851450719271622):8.40605441569775E-4,((Acacia_lasiocalyx:0.019207831403066367,((Acacia_jamesiana:0.015579706402285648,((Acacia_ammobia:0.00870165962639377,Acacia_bromilowiana:0.015938688387133276):7.151573113151066E-7,(Acacia_petraea:0.00450989168964136,(Acacia_undoolyana:0.0015234079252227362,Acacia_desmondii:0.0022954212681742248):0.002486921778304535):0.002128166300202128):0.003957439597350176):6.196661921715196E-4,(((Acacia_curranii:0.01615414977805829,(Acacia_repanda:0.0015132424204491735,(Acacia_multispicata:0.0031869519288851844,Acacia_oncinophylla:8.040383924820538E-4):0.0016024922623555649):0.003117527674506293):0.0028269141622643823,((Acacia_plectocarpa:0.0011948449174969678,Acacia_armitii:0.0013669537651874175):0.011683859381782319,(Acacia_delibrata:0.007557538438008743,(Acacia_gracillima:0.01651728584526191,(Acacia_trachycarpa:7.15157311287351E-7,(Acacia_chisholmii:7.151573113151066E-7,Acacia_lysiphloia:0.0032696224565494925):0.0053405650159057405):0.003456073182979663):0.0024631599622474687):0.0033540629635743224):0.003590312653334815):8.696189192810566E-4,((Acacia_eriopoda:0.042663445228002805,((Acacia_difficilis:0.0026561687867718287,Acacia_mountfordiae:0.01821123693674337):0.005797718328027057,(Acacia_blakei:0.05813127557964326,Acacia_hemsleyi:0.04469584113475372):0.006262157874704716):0.0022587279996645893):0.014497598105593645,((Acacia_tumida:0.012967168853347977,(Acacia_retinervis:7.15157311287351E-7,Acacia_areolata:7.15157311287351E-7):0.003219907090252827):0.012274798352010452,(Acacia_julifera:0.012393219642364783,(Acacia_stipuligera:0.012177274591753273,(Acacia_brassii:0.019701664585844547,(Acacia_proiantha:0.006542523904508407,(Acacia_torulosa:0.007928623153854286,Acacia_conspersa:0.012426284773310592):0.006049542347485143):8.749319040404491E-4):9.95082858383456E-4):0.0011574867894396101):8.97183673051527E-4):0.001198860027621318):0.0028528725987051473):0.00192648598690065):0.0043715818726474676):9.987759190550616E-4,(Acacia_anfractuosa:0.008873182737428653,(((Acacia_sparsiflora:0.022211565499028113,(Acacia_hopperiana:7.151573112595955E-7,(Acacia_arcuatilis:0.0011076276316849265,Acacia_aprica:0.0022933015241947963):0.0010749584563768955):0.009899462147004268):0.0020284305174865236,(Acacia_anastema:0.013761537372509236,((((Acacia_subtessarogona:0.00366198547315999,Acacia_balsamea:0.002163895048881148):0.004515990704463291,(Acacia_ramulosa:0.005858778890638183,(Acacia_coolgardiensis:0.0144898887381813,Acacia_sulcaticaulis:0.006926541498691874):0.0016861997311946597):7.898562445587398E-4):0.007559552903849798,(Acacia_catenulata:0.004881202432824749,(Acacia_brachystachya:0.005990238719446456,((Acacia_craspedocarpa:0.0035604797033783053,Acacia_aneura:0.00349694254167926):0.003448926265703811,(Acacia_distans:0.008696098657809903,(Acacia_clelandii:0.007455980031684517,(Acacia_minyura:7.15157311287351E-7,(Acacia_ayersiana:0.006317693628508092,Acacia_paraneura:7.151573112595955E-7):0.0036791425016740043):9.183029843846113E-4):8.97914789745824E-4):0.001592816656032725):0.004739574178191319):0.004801023142927907):0.002995458833489062):0.0010461149579037987,((Acacia_brockii:0.026284284287853954,(Acacia_atkinsiana:0.011990464662589961,(Acacia_macdonnelliensis:0.023478906280176265,Acacia_adsurgens:0.0016339762843763095):0.0034380211124614146):0.001603128985439517):0.008896749038436014,((Acacia_umbellata:0.01732252461553957,((Acacia_stowardii:0.001132129812480287,(Acacia_aprepta:7.15157311287351E-7,Acacia_kempeana:0.0024314224647912497):0.001185196699640928):0.005263584548861555,(Acacia_cyperophylla:0.006770029515112547,(Acacia_grasbyi:0.0027040924102191832,Acacia_rhodophloia:0.003329996440795402):0.0010842549089271625):0.0021951189957217787):0.0020986594666645986):0.00309310976332694,(Acacia_tenuissima:0.015937972842599624,((Acacia_doratoxylon:0.018995116088404596,(Acacia_pycnostachya:0.013342829807541756,(Acacia_diphylla:0.009499853014876297,Acacia_pubifolia:7.151573112595955E-7):0.015022168764784294):2.2585617697828964E-4):0.023019295765463688,((Acacia_cheelii:0.006152780250967382,(Acacia_binervia:0.005966845460812137,Acacia_bulgaensis:0.002613345276821527):0.0063304709552899074):0.006302827654321719,(Acacia_caroleae:0.0037858373591347083,(Acacia_striatifolia:0.002762396665344641,Acacia_tenuinervis:0.003320286345812551):0.0017858266914787535):0.0030936319089857056):0.004584911646439871):0.0010221249513046038):0.004411486951504007):0.004473825970498113):0.001045950863774514):7.151573112595955E-7):7.089851318609064E-4):0.005240349183264603,(Acacia_monticola:0.02227437934092541,((((Acacia_translucens:0.005361427037866684,Acacia_oncinocarpa:0.022703018382253415):0.00916516894773678,((Acacia_crassicarpa:7.151573112595955E-7,Acacia_aulacocarpa:0.004369969126456541):7.151573113151066E-7,(Acacia_lamprocarpa:0.002387552699856077,(Acacia_celsa:0.0060511532031342075,(Acacia_disparrima:0.006205996813168857,Acacia_midgleyi:0.006047530254997047):7.151573113151066E-7):0.003916487127581025):0.002193471461202412):0.010094417348349205):0.0026850197928284247,((Acacia_yirrkallensis:0.01515649252208745,((Acacia_abbreviata:0.008616745398838,Acacia_hilliana:0.003725567702767052):0.0070699420475539565,(Acacia_ptychophylla:0.005943715156075113,Acacia_ancistrocarpa:0.016009871466507453):0.001807728970762812):0.002533046937152006):0.002308396782733091,(Acacia_producta:0.01581702090808884,((Acacia_stigmatophylla:0.022174252901555225,Acacia_argyraea:0.016009674431644694):0.00360174757236148,((Acacia_tenuispica:0.02018145879060873,(Acacia_gonocarpa:0.04976750203469468,Acacia_drepanocarpa:0.002008799021607721):0.0028461775812705925):0.0024416849606722635,(Acacia_orthocarpa:0.013724073050198349,(Acacia_arida:0.0027674577546718537,Acacia_arrecta:0.004744301871896617):0.011284408200996188):0.002533409459942959):0.0017698710000446094):4.497101238186696E-4):0.0015381833856741856):0.0034713069008013298):0.0020037491309530253,(Acacia_tropica:0.0189754311547764,((Acacia_dimidiata:0.020380119037692268,Acacia_acradenia:0.009893906410539222):7.151573113151066E-7,(Acacia_hammondii:0.003871639396848481,((Acacia_gonoclada:0.009620597803963904,(Acacia_fecunda:0.00857154451185399,(Acacia_gardneri:0.0039844422625614495,(Acacia_neurocarpa:7.151573112595955E-7,Acacia_holosericea:7.151573112595955E-7):0.004184892689607533):0.006974585129303046):7.151573113151066E-7):8.743715718676492E-4,(((Acacia_colei:7.151573112595955E-7,Acacia_thomsonii:7.693300632887201E-4):0.007022009660984985,(Acacia_cowleana:0.015438629909800439,Acacia_elachantha:7.151573113151066E-7):6.744131690477051E-4):0.006262293115055162,(Acacia_pellita:0.0032677972222344143,(Acacia_sericoflora:0.011032315391365843,(Acacia_leptocarpa:0.014312114410124144,((Acacia_auriculiformis:0.02706369075124776,(Acacia_mangium:7.151573112595955E-7,Acacia_spirorbis:0.0038639041982758693):0.0038665417847968953):0.0023979485885232132,((Acacia_longispicata:0.04399347350736155,Acacia_faucium:0.0036298208908778218):0.0043116531915327605,((Acacia_leiocalyx:0.004623147325645671,Acacia_concurrens:0.0013366607295905442):0.0013450704491867471,(Acacia_crassa:0.0024925244313528383,Acacia_grandifolia:0.0035078331078483016):0.0034259947282264114):7.733718705501547E-4):7.956549626831344E-4):7.81221352745276E-4):0.0024764792221464438):7.151573113151066E-7):8.452137303939788E-4):7.916410228009929E-4):0.001914999861473532):0.002997513601407431):0.0042007500729312475):0.0025825048379546356):0.004041368700175907):0.0029298225772734776):0.00205795272866216):0.005689920488360534):9.361880659246591E-4):0.002964979808475099):8.58652490750178E-4):0.0010318812376912123):0.0019653985626942316):0.002600701613151124):0.003013333852035782):0.001720018637280496):0.010721577605685706):0.0037207302058150094):0.002308255351938099):7.151573112595955E-7):0.012802849825610363):0.006162997405089937):0.004309126889068704):0.00546021309371)));'
            

        });
        //testcase();
    } 
 
