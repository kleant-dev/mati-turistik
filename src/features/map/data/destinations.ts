import { LatLngExpression } from "leaflet";

export type destinationType = {
  type: "bridge" | "canyon" | "castle" | "cave" | "park";
  title: string;
  description: string;
  position: LatLngExpression;
  image: string;
};

export const destinations: destinationType[] = [
  {
    type: "bridge",
    title: "Ura e Vashes",
    description:
      "Ura e Vashes ndodhet mbi lumin Mat mes Klosit dhe fshatit Guri i Bardhe",
    position: [41.48944466737521, 20.095996371163938],
    image: "/images/uravashes.jpg",
  },
  {
    type: "cave",
    title: "Shpella e Blazit",
    description:
      "Shpella e Blazit dhe e Nezirit  kanë dhënë dëshmi  mbi një kulturë  që nis  në  paleolitin e sipërm ( 18.000.p.e.s) e ka patur vijimësi gjatë  epokës neolitit (7000 vjet p.e.s), eneolitit (3500 vjet.p.e.s) dhe periudhës hershme të bronzit (2100 p.e.s)",
    position: [41.70509643845427, 20.007968315344236],
    image: "/images/shpellablazit.jpg",
  },
  {
    type: "cave",
    title: "Shpella e Pellumbave",
    description:
      "Në këtë shpellë si armë, vegla të punës prej bronzi e hekuri, objekte të përdorimit të përditshëm prej qeramike",
    position: [41.7064805, 20.0077331],
    image: "/images/shpellapellumbave.jpg",
  },
  {
    type: "park",
    title: "Parku Kombëtar Ulëz",
    description:
      "Nga pikëpamja gjeografike ndodhet vetëm 5km larg nga rruga Milot-Mat. Ulëza gjendet në një zonë me reliev policen-kuaternar, kohë në të cilën u formua relievi kodrinor dhe i kësaj zone",
    position: [41.68339, 19.89371],
    image: "/images/ulez.jpg",
  },
  {
    type: "castle",
    title: "Kalaja e Petralbës",
    description:
      "Ndodhet poshtë fshatit Guri i Bardhë dhe përmbi fshatin Fshat dhe është një kreshtë malore me lartësi 778. Barleti per këtë kala thotë “Ky është një qytet në Mat i ndërtuar në majë të një mali, por që si trembet megjithatë, përveç urisë, asnjë fuqie armike.",
    position: [41.4746643, 20.0794016],
    image: "/images/kalajapetralbes.webp",
  },
  {
    type: "canyon",
    title: "Kanioni i Urakës",
    description:
      " Kanioni i Urakës përfaqëson një kanion rreth 3 km të gjatë i cili është formuar nga veprimtaria erozive e lumit të Urakës. Muret rrethuese të këtij kanioni janë vertikalë, me guva e shpella të shumta të modelit karstik, që janë mjaft të vështira për t'u eksploruar pasi kalimi përgjatë tyre është mjaft i vështirë. ",
    position: [41.70582497404958, 20.04420203509262],
    image: "/images/kanioniurakes.jpg",
  },
  {
    type: "castle",
    title: "Kalaja e Xibrit",
    description:
      "Kalaja Ilire e Xibrit ndodhet në lartësinë 930 metra mbi nivelin e detit. ajo qendet mes fshatrave Xibër – Hane mbi lagjen “Splaj”, fshatit Shkallë dhe fshatit Dars. Historiani Sefer Duka thotë se kjo kala i përket periudhës Ilire në shekullin e V-stë para erës sonë, duke bërë atë ndër më të vjetrat në vendin tonë.",
    position: [41.4804742, 20.0657264],
    image: "/images/kalajaxibrit.jpg",
  },
  {
    type: "canyon",
    title: "Kanioni i Filmit",
    description:
      "Kanioni i Filmit është një monument natyror i cili ndodhet në sektorin e mesëm të rrjedhjes së Filmit (degë e Urakës), në afërsi të fshatit Dukagjin, komuna Derjan në rrethin e Matit.",
    position: [41.73352606694535, 20.10577587812406],
    image: "/images/kanionifilmit.jpg",
  },
  {
    type: "castle",
    title: "Kalaja e Stelushit",
    description:
      "Kalaja është ndërtuar në një kreshtë mali, në një lartësi prej 1225 m, në anën lindore të Malit të Dejës. Poshtë e në këmbë të kalasë ishte ndërtuar qyteza e saj, por emri i lashtë nuk dihet.",
    position: [41.649529484805846, 20.188040770717265],
    image: "/images/kalajastelushit.jpg",
  },
  {
    type: "park",
    title: "Parku Kombëtar i Qafë Shtamës",
    description:
      "Qafa (1'230 m) shërben si urë lidhëse midis zonës së Krujës dhe luginës së Matit në veri. Zona kufizohet me pellgun e Bovillës nga jugu i saj, dhe është ekologjikisht e lidhur ngushtë me të. Gjithë zona dallohet për vlerat natyrore dhe pyjet e virgjër.",
    position: [41.524355, 19.903145],
    image: "/images/parkuqafshtames.jpg",
  },
  {
    type: "park",
    title: "Parku Kombëtar Zall-Gjoçaj",
    description:
      "Parku së bashku me zonën rreth tij ka vlera shumë të larta të biodiversitetit dhe një mori habitatesh, llojesh bimore e shtazore. Takohen pyje me pishë, arrnen, rrobull, ah dhe lloje endemike e subendemike, livadhe alpine, liqene akullnajore, përrenjë të shumtë dhe një faunë karakteristike të veçantë.",
    position: [41.74165695674403, 20.151344660572462],
    image: "/images/gjocaj.jpeg",
  },
  {
    type: "park",
    title: " Parku “Nëna Mbretëreshë Geraldinë”",
    description:
      "Parku është ndërtuar në vitet ’30 dhe investimi në kuadër të programit të “Rilindjes Urbane” e ka transformuar por duke ruajtur formën piktoreske. Pllakat e lulishtes janë bërë me gurë të zonës, ndërkohë që janë montuar sistemi ujitës e janë vendosur stola e kosha mbeturinash.",
    position: [41.61166151951044, 20.014927489720854],
    image: "/images/parkugeraldine.jpg",
  },
];

export const bridges: {
  title: string;
  description: string;
  position: LatLngExpression;
}[] = [
  {
    title: "Ura e Vashes",
    description:
      "Ura e Vashes ndodhet mbi lumin Mat mes Klosit dhe fshatit Guri i Bardhe",
    position: [41.48944466737521, 20.095996371163938],
  },
];
