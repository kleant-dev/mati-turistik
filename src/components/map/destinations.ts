import { LatLngExpression } from "leaflet";

export const destinations = [
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
    image: "/images/kalajapetrables.webp",
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
    title: "",
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
