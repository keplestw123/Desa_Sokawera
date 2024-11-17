ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([109.306814, -7.522969, 109.318529, -7.514327]);
var wms_layers = [];

var format_gadm41_IDNADM_ADM_4_0 = new ol.format.GeoJSON();
var features_gadm41_IDNADM_ADM_4_0 = format_gadm41_IDNADM_ADM_4_0.readFeatures(json_gadm41_IDNADM_ADM_4_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_gadm41_IDNADM_ADM_4_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_IDNADM_ADM_4_0.addFeatures(features_gadm41_IDNADM_ADM_4_0);
var lyr_gadm41_IDNADM_ADM_4_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_IDNADM_ADM_4_0, 
                style: style_gadm41_IDNADM_ADM_4_0,
                popuplayertitle: "gadm41_IDN — ADM_ADM_4",
                interactive: true,
                title: '<img src="styles/legend/gadm41_IDNADM_ADM_4_0.png" /> gadm41_IDN — ADM_ADM_4'
            });
var format_kebun_1 = new ol.format.GeoJSON();
var features_kebun_1 = format_kebun_1.readFeatures(json_kebun_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_kebun_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kebun_1.addFeatures(features_kebun_1);
var lyr_kebun_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kebun_1, 
                style: style_kebun_1,
                popuplayertitle: "kebun",
                interactive: true,
                title: '<img src="styles/legend/kebun_1.png" /> kebun'
            });
var format_sawah_2 = new ol.format.GeoJSON();
var features_sawah_2 = format_sawah_2.readFeatures(json_sawah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_sawah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawah_2.addFeatures(features_sawah_2);
var lyr_sawah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sawah_2, 
                style: style_sawah_2,
                popuplayertitle: "sawah",
                interactive: true,
                title: '<img src="styles/legend/sawah_2.png" /> sawah'
            });
var format_namartrw_3 = new ol.format.GeoJSON();
var features_namartrw_3 = format_namartrw_3.readFeatures(json_namartrw_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_namartrw_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_namartrw_3.addFeatures(features_namartrw_3);
var lyr_namartrw_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_namartrw_3, 
                style: style_namartrw_3,
                popuplayertitle: "namartrw",
                interactive: true,
    title: 'namartrw<br />\
    <img src="styles/legend/namartrw_3_0.png" /> Aswin<br />\
    <img src="styles/legend/namartrw_3_1.png" /> Baeni<br />\
    <img src="styles/legend/namartrw_3_2.png" /> Budi<br />\
    <img src="styles/legend/namartrw_3_3.png" /> Dedi Susanto<br />\
    <img src="styles/legend/namartrw_3_4.png" /> Kasno<br />\
    <img src="styles/legend/namartrw_3_5.png" /> Katam<br />\
    <img src="styles/legend/namartrw_3_6.png" /> Marin<br />\
    <img src="styles/legend/namartrw_3_7.png" /> Nartoyo<br />\
    <img src="styles/legend/namartrw_3_8.png" /> Naslam<br />\
    <img src="styles/legend/namartrw_3_9.png" /> Natim<br />\
    <img src="styles/legend/namartrw_3_10.png" /> Parji<br />\
    <img src="styles/legend/namartrw_3_11.png" /> Parno<br />\
    <img src="styles/legend/namartrw_3_12.png" /> Purwono<br />\
    <img src="styles/legend/namartrw_3_13.png" /> Riyanto<br />\
    <img src="styles/legend/namartrw_3_14.png" /> Rohmadi<br />\
    <img src="styles/legend/namartrw_3_15.png" /> Sage<br />\
    <img src="styles/legend/namartrw_3_16.png" /> Sala<br />\
    <img src="styles/legend/namartrw_3_17.png" /> Sarjono<br />\
    <img src="styles/legend/namartrw_3_18.png" /> Sito<br />\
    <img src="styles/legend/namartrw_3_19.png" /> Sunarko<br />\
    <img src="styles/legend/namartrw_3_20.png" /> Sutarno<br />\
    <img src="styles/legend/namartrw_3_21.png" /> Sutriono<br />\
    <img src="styles/legend/namartrw_3_22.png" /> Tedi<br />\
    <img src="styles/legend/namartrw_3_23.png" /> Tri Wahyudi<br />\
    <img src="styles/legend/namartrw_3_24.png" /> Triyono<br />\
    <img src="styles/legend/namartrw_3_25.png" /> Warisno<br />\
    <img src="styles/legend/namartrw_3_26.png" /> Warsito<br />\
    <img src="styles/legend/namartrw_3_27.png" /> Warto<br />\
    <img src="styles/legend/namartrw_3_28.png" /> <br />'
        });
var format_rumahpolygonrumah_4 = new ol.format.GeoJSON();
var features_rumahpolygonrumah_4 = format_rumahpolygonrumah_4.readFeatures(json_rumahpolygonrumah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rumahpolygonrumah_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumahpolygonrumah_4.addFeatures(features_rumahpolygonrumah_4);
var lyr_rumahpolygonrumah_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumahpolygonrumah_4, 
                style: style_rumahpolygonrumah_4,
                popuplayertitle: "rumah — polygonrumah",
                interactive: true,
                title: '<img src="styles/legend/rumahpolygonrumah_4.png" /> rumah — polygonrumah'
            });
var format_sungaiserayu_5 = new ol.format.GeoJSON();
var features_sungaiserayu_5 = format_sungaiserayu_5.readFeatures(json_sungaiserayu_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_sungaiserayu_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungaiserayu_5.addFeatures(features_sungaiserayu_5);
var lyr_sungaiserayu_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungaiserayu_5, 
                style: style_sungaiserayu_5,
                popuplayertitle: "sungaiserayu",
                interactive: true,
                title: '<img src="styles/legend/sungaiserayu_5.png" /> sungaiserayu'
            });
var format_sungai__6 = new ol.format.GeoJSON();
var features_sungai__6 = format_sungai__6.readFeatures(json_sungai__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_sungai__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai__6.addFeatures(features_sungai__6);
var lyr_sungai__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai__6, 
                style: style_sungai__6,
                popuplayertitle: "sungai_",
                interactive: true,
                title: '<img src="styles/legend/sungai__6.png" /> sungai_'
            });
var format_lapangan__7 = new ol.format.GeoJSON();
var features_lapangan__7 = format_lapangan__7.readFeatures(json_lapangan__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_lapangan__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lapangan__7.addFeatures(features_lapangan__7);
var lyr_lapangan__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lapangan__7, 
                style: style_lapangan__7,
                popuplayertitle: "lapangan_",
                interactive: true,
                title: '<img src="styles/legend/lapangan__7.png" /> lapangan_'
            });
var format_jalan_8 = new ol.format.GeoJSON();
var features_jalan_8 = format_jalan_8.readFeatures(json_jalan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_jalan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_8.addFeatures(features_jalan_8);
var lyr_jalan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_8, 
                style: style_jalan_8,
                popuplayertitle: "jalan",
                interactive: true,
    title: 'jalan<br />\
    <img src="styles/legend/jalan_8_0.png" /> bjk kulon<br />\
    <img src="styles/legend/jalan_8_1.png" /> bjk wetan 1<br />\
    <img src="styles/legend/jalan_8_2.png" /> gang 1<br />\
    <img src="styles/legend/jalan_8_3.png" /> gang.bjk 1<br />\
    <img src="styles/legend/jalan_8_4.png" /> gang.bjk 2<br />\
    <img src="styles/legend/jalan_8_5.png" /> gang.lapangan<br />\
    <img src="styles/legend/jalan_8_6.png" /> gangbjk<br />\
    <img src="styles/legend/jalan_8_7.png" /> Gangpasar<br />\
    <img src="styles/legend/jalan_8_8.png" /> gangpasar1<br />\
    <img src="styles/legend/jalan_8_9.png" /> jl masjid 1<br />\
    <img src="styles/legend/jalan_8_10.png" /> jl skw kidul<br />\
    <img src="styles/legend/jalan_8_11.png" /> jl. bonjok<br />\
    <img src="styles/legend/jalan_8_12.png" /> jl. lap bonjok<br />\
    <img src="styles/legend/jalan_8_13.png" /> JL.Baldes<br />\
    <img src="styles/legend/jalan_8_14.png" /> jl.BENGKEL<br />\
    <img src="styles/legend/jalan_8_15.png" /> jl.bj 5<br />\
    <img src="styles/legend/jalan_8_16.png" /> jl.bjk 2<br />\
    <img src="styles/legend/jalan_8_17.png" /> jl.bjk 3<br />\
    <img src="styles/legend/jalan_8_18.png" /> jl.bjk 4<br />\
    <img src="styles/legend/jalan_8_19.png" /> jl.bjk lap 1<br />\
    <img src="styles/legend/jalan_8_20.png" /> jl.bjk lor<br />\
    <img src="styles/legend/jalan_8_21.png" /> jl.bjk wetan<br />\
    <img src="styles/legend/jalan_8_22.png" /> JL.Brug<br />\
    <img src="styles/legend/jalan_8_23.png" /> jl.dipopasir<br />\
    <img src="styles/legend/jalan_8_24.png" /> Jl.gang2<br />\
    <img src="styles/legend/jalan_8_25.png" /> Jl.Gardu<br />\
    <img src="styles/legend/jalan_8_26.png" /> jl.kd bekong<br />\
    <img src="styles/legend/jalan_8_27.png" /> jl.kdbekongkidul<br />\
    <img src="styles/legend/jalan_8_28.png" /> jl.logandeng<br />\
    <img src="styles/legend/jalan_8_29.png" /> jl.masjid<br />\
    <img src="styles/legend/jalan_8_30.png" /> jl.pasar lor<br />\
    <img src="styles/legend/jalan_8_31.png" /> jl.pasar skw<br />\
    <img src="styles/legend/jalan_8_32.png" /> jl.skw1<br />\
    <img src="styles/legend/jalan_8_33.png" /> jl.sokawera<br />\
    <img src="styles/legend/jalan_8_34.png" /> jl.tanggeran<br />\
    <img src="styles/legend/jalan_8_35.png" /> jlbeji<br />\
    <img src="styles/legend/jalan_8_36.png" /> jlbeji2<br />\
    <img src="styles/legend/jalan_8_37.png" /> KFSF<br />\
    <img src="styles/legend/jalan_8_38.png" /> lp1<br />\
    <img src="styles/legend/jalan_8_39.png" /> Lp2<br />\
    <img src="styles/legend/jalan_8_40.png" /> skw<br />\
    <img src="styles/legend/jalan_8_41.png" /> <br />'
        });
var format_poin_9 = new ol.format.GeoJSON();
var features_poin_9 = format_poin_9.readFeatures(json_poin_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_poin_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poin_9.addFeatures(features_poin_9);
var lyr_poin_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poin_9, 
                style: style_poin_9,
                popuplayertitle: "poin",
                interactive: true,
    title: 'poin<br />\
    <img src="styles/legend/poin_9_0.png" /> Aula Baledesa Sokawera<br />\
    <img src="styles/legend/poin_9_1.png" /> Bale Desa Sokawera<br />\
    <img src="styles/legend/poin_9_2.png" /> Dealer Motor Sokawera<br />\
    <img src="styles/legend/poin_9_3.png" /> Home Rindita RT 03/05 (Pak Parji)<br />\
    <img src="styles/legend/poin_9_4.png" /> Lapangan Sokawera Bonjok<br />\
    <img src="styles/legend/poin_9_5.png" /> LKP Alfa Modelling<br />\
    <img src="styles/legend/poin_9_6.png" /> LPK Jepang & Korea<br />\
    <img src="styles/legend/poin_9_7.png" /> Masjid Darussalam Sokawera<br />\
    <img src="styles/legend/poin_9_8.png" /> Masjid Nur Rohmah<br />\
    <img src="styles/legend/poin_9_9.png" /> Masjid Nurul Huda<br />\
    <img src="styles/legend/poin_9_10.png" /> MI Ma\'arif Nu At Tijani<br />\
    <img src="styles/legend/poin_9_11.png" /> Mushala Al-Birri<br />\
    <img src="styles/legend/poin_9_12.png" /> Mushala An rahman<br />\
    <img src="styles/legend/poin_9_13.png" /> Mushala Darul Fallah<br />\
    <img src="styles/legend/poin_9_14.png" /> PT Imused Satria<br />\
    <img src="styles/legend/poin_9_15.png" /> Rmh 03/04 (Bpk. Tri wahyudi)<br />\
    <img src="styles/legend/poin_9_16.png" /> Rmh Kades Sokwera (Bpk.Karman)<br />\
    <img src="styles/legend/poin_9_17.png" /> Rmh RT 01/01 (Bpk.Marin)<br />\
    <img src="styles/legend/poin_9_18.png" /> Rmh RT 01/02 (Bpk.Sutarno)<br />\
    <img src="styles/legend/poin_9_19.png" /> Rmh RT 01/03 (Bpk susanto)<br />\
    <img src="styles/legend/poin_9_20.png" /> Rmh RT 01/04 (Bpk.Naslam)<br />\
    <img src="styles/legend/poin_9_21.png" /> Rmh RT 01/05 (Bpk.Riyanto)<br />\
    <img src="styles/legend/poin_9_22.png" /> Rmh RT 01/06 (Bpk.Warsito)<br />\
    <img src="styles/legend/poin_9_23.png" /> Rmh RT 02/01 (Bpk.Budi)<br />\
    <img src="styles/legend/poin_9_24.png" /> Rmh RT 02/02 (Bpk Tedi)<br />\
    <img src="styles/legend/poin_9_25.png" /> Rmh RT 02/03 (Bpk. Warisno)<br />\
    <img src="styles/legend/poin_9_26.png" /> Rmh RT 02/04 (Bpk.Katam)<br />\
    <img src="styles/legend/poin_9_27.png" /> Rmh RT 02/05 (Bpk. Sito)<br />\
    <img src="styles/legend/poin_9_28.png" /> Rmh RT 02/06 (Bpk.Sala)<br />\
    <img src="styles/legend/poin_9_29.png" /> Rmh RT 03/01 (Bpk.Sarjono)<br />\
    <img src="styles/legend/poin_9_30.png" /> Rmh RT 03/02 (Bpk.Rohmadi)<br />\
    <img src="styles/legend/poin_9_31.png" /> Rmh RT 03/03 (Bpk.Warto)<br />\
    <img src="styles/legend/poin_9_32.png" /> Rmh RT 03/05 (Bpk.Nartoyo)<br />\
    <img src="styles/legend/poin_9_33.png" /> Rmh RT 04/01 (Bpk.Kasno)<br />\
    <img src="styles/legend/poin_9_34.png" /> Rmh RT 04/03 (Bpk.Purwono)<br />\
    <img src="styles/legend/poin_9_35.png" /> Rmh RT 04/04 (Bpk.Natim)<br />\
    <img src="styles/legend/poin_9_36.png" /> Rmh RT 04/05 (Bp.Sage)<br />\
    <img src="styles/legend/poin_9_37.png" /> Rmh RT 04/05 (Bpk Aswin)<br />\
    <img src="styles/legend/poin_9_38.png" /> Rmh RT 04/06 (Bpk Baeni)<br />\
    <img src="styles/legend/poin_9_39.png" /> Rmh RT 05/01 (Bpk.Sutriono)<br />\
    <img src="styles/legend/poin_9_40.png" /> Rmh RT 05/02 (Bpk.Sunarko)<br />\
    <img src="styles/legend/poin_9_41.png" /> Rmh RT 05/03 (Bpk. Parno)<br />\
    <img src="styles/legend/poin_9_42.png" /> Rmh RT 05/05 (Bpk. Triyono)<br />\
    <img src="styles/legend/poin_9_43.png" /> Rmh RW 01 (Bpk.Sadi)<br />\
    <img src="styles/legend/poin_9_44.png" /> Rmh RW 02 (Bpk.parno)<br />\
    <img src="styles/legend/poin_9_45.png" /> Rmh RW 03 (Bpk.Ratun)<br />\
    <img src="styles/legend/poin_9_46.png" /> Rmh RW 04 (Bpk.Warid)<br />\
    <img src="styles/legend/poin_9_47.png" /> Rmh RW 06 (Bpk Rakiman)<br />\
    <img src="styles/legend/poin_9_48.png" /> Rumah rw 5 (Pak Suprapto)<br />\
    <img src="styles/legend/poin_9_49.png" /> SD N 01 SOKAWERA<br />\
    <img src="styles/legend/poin_9_50.png" /> SD N 03 SOKAWERA<br />\
    <img src="styles/legend/poin_9_51.png" /> SD N 2 SOKAWERA<br />\
    <img src="styles/legend/poin_9_52.png" /> Soto Bonjok<br />\
    <img src="styles/legend/poin_9_53.png" /> SRC Alvin<br />\
    <img src="styles/legend/poin_9_54.png" /> TK PERTIWI 1 SOKAWERA<br />\
    <img src="styles/legend/poin_9_55.png" /> TK PERTIWI 2 SOKAWERA<br />\
    <img src="styles/legend/poin_9_56.png" /> TK PERTIWI 3 SOKAWERA<br />\
    <img src="styles/legend/poin_9_57.png" /> Toko Assa 2<br />\
    <img src="styles/legend/poin_9_58.png" /> Toko Serba Ada Bonjok<br />\
    <img src="styles/legend/poin_9_59.png" /> TPQ Nurul Yaqin<br />\
    <img src="styles/legend/poin_9_60.png" /> <br />'
        });

lyr_gadm41_IDNADM_ADM_4_0.setVisible(true);lyr_kebun_1.setVisible(true);lyr_sawah_2.setVisible(true);lyr_namartrw_3.setVisible(true);lyr_rumahpolygonrumah_4.setVisible(true);lyr_sungaiserayu_5.setVisible(true);lyr_sungai__6.setVisible(true);lyr_lapangan__7.setVisible(true);lyr_jalan_8.setVisible(true);lyr_poin_9.setVisible(true);
var layersList = [lyr_gadm41_IDNADM_ADM_4_0,lyr_kebun_1,lyr_sawah_2,lyr_namartrw_3,lyr_rumahpolygonrumah_4,lyr_sungaiserayu_5,lyr_sungai__6,lyr_lapangan__7,lyr_jalan_8,lyr_poin_9];
lyr_gadm41_IDNADM_ADM_4_0.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_kebun_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama': 'Nama', });
lyr_sawah_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama': 'Nama', });
lyr_namartrw_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'NamaRT': 'NamaRT', });
lyr_rumahpolygonrumah_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama': 'Nama', });
lyr_sungaiserayu_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_sungai__6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama sunga': 'Nama sunga', });
lyr_lapangan__7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'NamaLap': 'NamaLap', });
lyr_jalan_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'namajalan': 'namajalan', 'lebar': 'lebar', });
lyr_poin_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama': 'Nama', });
lyr_gadm41_IDNADM_ADM_4_0.set('fieldImages', {'fid': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_kebun_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_sawah_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_namartrw_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'RT': 'TextEdit', 'RW': 'TextEdit', 'NamaRT': 'TextEdit', });
lyr_rumahpolygonrumah_4.set('fieldImages', {'fid': '', 'id': '', 'Nama': '', });
lyr_sungaiserayu_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_sungai__6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nama sunga': 'TextEdit', });
lyr_lapangan__7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'NamaLap': 'TextEdit', });
lyr_jalan_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'namajalan': 'TextEdit', 'lebar': 'TextEdit', });
lyr_poin_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_gadm41_IDNADM_ADM_4_0.set('fieldLabels', {'fid': 'no label', 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_kebun_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nama': 'no label', });
lyr_sawah_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nama': 'no label', });
lyr_namartrw_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'NamaRT': 'no label', });
lyr_rumahpolygonrumah_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nama': 'no label', });
lyr_sungaiserayu_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_sungai__6.set('fieldLabels', {'fid': 'inline label - visible with data', 'id': 'inline label - always visible', 'Nama sunga': 'inline label - always visible', });
lyr_lapangan__7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'NamaLap': 'no label', });
lyr_jalan_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'namajalan': 'no label', 'lebar': 'no label', });
lyr_poin_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nama': 'no label', });
lyr_poin_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});