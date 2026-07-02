/* =========================================================================
   Kondamudi Srichandan — Academic Portfolio
   All data below is transcribed directly from the supplied CV/resume PDF.
   Fields not present in the source document (email, phone, office, photo)
   are left as clearly-marked editable placeholders — never fabricated.
   ========================================================================= */

/* ---------------------------------------------------------------------- */
/*  PROFILE                                                                */
/* ---------------------------------------------------------------------- */
const PROFILE = {
  name: "Kondamudi Srichandan",
  designation: "Faculty, Department of Electrical & Electronics Engineering",
  institution: "GITAM (Deemed to be University), Visakhapatnam",
  email: "srichandank@gmail.com",
  phone: "+91-9866298851",
  office: "Dept. of EECE, GITAM University, Visakhapatnam",
  researchInterests: [
    "Electromagnetic Launchers", "Solar PV Systems", "Reverse Osmosis Desalination",
    "Power Systems", "Electric Vehicles", "Smart Grids"
  ],
  ids: {
    orcid: { label: "0000-0002-8047-5625", url: "https://orcid.org/0000-0002-8047-5625" },
    scholar: [
      { label: "srichandank", id: "sHXXyT4AAAAJ" },
      { label: "skondamu", id: "09Yde1AAAAAJ" }
    ],
    scopus: ["57208564323", "57216180295", "55811313100"],
    researcherId: "AAX-6725-2021",
    vidwan: "310996",
    aicte: "1-9485582088"
  },
  metrics: {
    citationsAll: 291, citationsSince2021: 240,
    hIndexAll: 8, hIndexSince2021: 7,
    i10All: 6, i10Since2021: 3,
    citationTrend: [ // approximate relative trend 2019-2026 for visual bar chart only
      { year: 2019, value: 6 }, { year: 2020, value: 16 }, { year: 2021, value: 46 },
      { year: 2022, value: 32 }, { year: 2023, value: 50 }, { year: 2024, value: 60 },
      { year: 2025, value: 42 }, { year: 2026, value: 20 }
    ]
  }
};

/* ---------------------------------------------------------------------- */
/*  RESEARCH PUBLICATIONS (35) — categorized as in the source CV          */
/* ---------------------------------------------------------------------- */
const PUBLICATIONS = [
  // ---- SCI (7) ----
  { cat:"SCI", title:"Assessing sustainable photovoltaic deployment through multi-system performance evaluation in coastal India", authors:"Thotakura, Sandhya, and Srichandan Kondamudi", journal:"Energy for Sustainable Development", year:2026, volume:"93", pages:"101974", doi:"10.1016/j.esd.2026.101974", quartile:"Q1", impact:"5.067", publisher:"Elsevier" },
  { cat:"SCI", title:"A novel design of multilevel disk-type axial flux eddy current heating (AFECH) device: A sustainable approach for feed water heating in reverse osmosis desalination", authors:"Somasi, A. S., & Srichandan, K.", journal:"AIP Advances", year:2024, volume:"14(8)", pages:"", doi:"10.1063/5.0208700", quartile:"Q2", impact:"1.697", publisher:"American Institute of Physics" },
  { cat:"SCI", title:"Sustainable solution for water crisis in Indian coastal district: A multi-criteria approach to evaluating solar PV powered reverse osmosis desalination", authors:"Somasi, Anantha Sai, and Kondamudi Srichandan", journal:"AIP Advances", year:2023, volume:"13(11)", pages:"", doi:"10.1063/5.0178422", quartile:"Q2", impact:"1.697", publisher:"American Institute of Physics", issn:"2158-3226" },
  { cat:"SCI", title:"Analysis of Quadrupole Magnetic Field Reluctance-Based Launcher With Different Coil Switching Patterns", authors:"Manohar, Kintali, and Kondamudi Srichandan", journal:"IEEE Transactions on Plasma Science", year:2023, volume:"", pages:"", doi:"10.1109/TPS.2023.3266515", quartile:"Q3", impact:"1.5", publisher:"IEEE", issn:"0093-3813" },
  { cat:"SCI", title:"Operating temperature prediction and comparison for rooftop PV arrays in coastal climates of India", authors:"Thotakura, Sandhya, and Sri Chandan Kondamudi", journal:"Environmental Science and Pollution Research", year:2022, volume:"29", pages:"43532-43545", doi:"10.1007/s11356-022-20068-6", quartile:"Q1", impact:"5.8", publisher:"Springer", issn:"0944-1344" },
  { cat:"SCI", title:"Operational performance of megawatt-scale grid integrated rooftop solar PV system in tropical wet and dry climates of India", authors:"Thotakura, Sandhya, Sri Chandan Kondamudi, J. Francis Xavier, Ma Quanjin, Guduru Ramakrishna Reddy, Pavan Gangwar, and Sri Lakshmi Davuluri", journal:"Case Studies in Thermal Engineering", year:2020, volume:"18", pages:"100602", doi:"10.1016/j.csite.2020.100602", quartile:"Q1", impact:"6.8", publisher:"Elsevier Ltd.", issn:"2214-157X" },
  { cat:"SCI", title:"A novel type coil-multipole field hybrid electromagnetic launching system", authors:"Kondamudi, Sri Chandan, Sandhya Thotakura, Mallikarjuna Rao Pasumarthi, Guduru Ramakrishna Reddy, Sandesh Mysore Sathyaraj, and X. X. Jiang", journal:"Results in Physics", year:2019, volume:"15", pages:"102786", doi:"10.1016/j.rinp.2019.102786", quartile:"Q2", impact:"5.3", publisher:"Elsevier B.V.", issn:"2211-3797" },

  // ---- ESCI (1) ----
  { cat:"ESCI", title:"A comparative study of power circuit topologies for two-wing armature electromagnetic launcher", authors:"G Prasad, K Srichandan", journal:"Advances in Science and Technology Research Journal (ASTRJ)", year:2025, volume:"19(4)", pages:"32-41", doi:"", quartile:"Q3", impact:"1", publisher:"" },

  // ---- WoS (3) ----
  { cat:"WoS", title:"Assessing feasibility of solar-powered desalination in Visakhapatnam using weighted normalized decision matrix (WNDM)", authors:"Ananthasai Somasi, Kondamudi Srichandan", journal:"AIP Conference Proceedings", year:2025, volume:"3237", pages:"040013", doi:"10.1063/5.0247120", quartile:"", impact:"", publisher:"AIP" },
  { cat:"WoS", title:"Fuzzy TOPSIS and Fuzzy AHP-based MCDA for selecting the Optimal Location for a Solar PV-powered RO Desalination Unit in Visakhapatnam, India", authors:"Somasi, Anantha Sai, and Srichandan Kondamudi", journal:"Engineering, Technology & Applied Science Research", year:2024, volume:"14(3)", pages:"13837-13844", doi:"", quartile:"Q2", impact:"0.49", publisher:"" },
  { cat:"WoS", title:"Computations of magnetic forces in multipole field electromagnetic launcher", authors:"Kondamudi, Srichandan, and Mallikarjuna Rao Pasumarthi", journal:"International Journal of Mathematical, Engineering and Management Sciences", year:2019, volume:"4(3)", pages:"761", doi:"10.33889/IJMEMS.2019.4.3-059", quartile:"Q3", impact:"1.6", publisher:"IJMEMS", issn:"2455-7749" },

  // ---- Scopus (15) ----
  { cat:"Scopus", title:"Implementation of RO-PUF Based Authentication for Secure Electric Vehicle Charging", authors:"Srichandan, Kondamudi, and Sandhya Thotakura", journal:"2025 IEEE International Transportation Electrification Conference (ITEC-India)", year:2025, volume:"", pages:"1-6", doi:"10.1109/ITEC-India67626.2025.11439433", quartile:"", impact:"", publisher:"IEEE" },
  { cat:"Scopus", title:"A comparative study of quadrupole rail launcher and two-wing armature electromagnetic launcher: magnetic and performance metrics", authors:"G., Prasad, Gajja, K., Srichandan, Kondamudi", journal:"Journal of Mechanics of Continua and Mathematical Sciences", year:2024, volume:"19(12)", pages:"", doi:"10.26782/jmcms.2024.12.00002", quartile:"Q4", impact:"", publisher:"" },
  { cat:"Scopus", title:"A comprehensive design and simulation of quadrupole electromagnetic linear systems for precise positioning in aerospace", authors:"Kondamudi Srichandan, Manohar, K.", journal:"Journal of Mechanics of Continua and Mathematical Sciences", year:2024, volume:"19(6)", pages:"67-79", doi:"10.26782/jmcms.2024.06.00006", quartile:"Q4", impact:"", publisher:"" },
  { cat:"Scopus", title:"A Review on Wind Power Feasibility at Various Locations of Coastal Regions of Andhra Pradesh", authors:"Thotakura S. Sirisha, PV., Kondamudi, S. C.", journal:"Journal of Green Engineering", year:2020, volume:"10(11)", pages:"10554-10580", doi:"", quartile:"", impact:"", publisher:"Alpha Publishers", issn:"1904-4720" },
  { cat:"Scopus", title:"Review of Photovoltaic Systems Performance Influencing Factors", authors:"Navothna, Bhogula, Sri Chandan Kondamudi, and Sandhya Thotakura", journal:"Journal of Green Engineering", year:2020, volume:"10", pages:"9052-9067", doi:"", quartile:"", impact:"", publisher:"Alpha Publishers", issn:"1904-4720" },
  { cat:"Scopus", title:"Constraint-Based Design of Multipole Field Electromagnetic Launcher using Gauss Method", authors:"Srichandan Kondamudi and Mallikarjuna Rao Pasumarthi", journal:"International Journal of Engineering and Advanced Technology (IJEAT)", year:2019, volume:"8(6S2)", pages:"907-911", doi:"10.35940/ijeat.F1221.0886S219", quartile:"", impact:"", publisher:"Blue Eyes Intelligence Engineering", issn:"2249-8958" },
  { cat:"Scopus", title:"Design and analysis of cored type multipole field electromagnetic launcher (C-MFEML)", authors:"Kondamudi, Srichandan, Mallikarjuna Rao Pasumarthi, and Sandhya Thotakura", journal:"International Journal of Innovative Technology and Exploring Engineering", year:2019, volume:"8(6)", pages:"391-395", doi:"", quartile:"", impact:"", publisher:"Blue Eyes Intelligence Engineering", issn:"2278-3075" },
  { cat:"Scopus", title:"Performance Evaluation on Two Wing Ring Type Armature with Inductive Type Electromagnetic Launching System", authors:"Prasad, Gajja, and Kondamudi Srichandan", journal:"2022 IEEE 10th Power India International Conference (PIICON)", year:2022, volume:"", pages:"1-5", doi:"10.1109/PIICON56320.2022.10045133", quartile:"", impact:"", publisher:"IEEE" },
  { cat:"Scopus", title:"Design optimization of quad-pole electromagnetic ejection device using particle swarm optimization", authors:"Manohar, Kintali, and Kondamudi Srichandan", journal:"2021 IEEE ICISSGT", year:2021, volume:"", pages:"52-56", doi:"10.1109/ICISSGT52025.2021.00022", quartile:"", impact:"", publisher:"IEEE" },
  { cat:"Scopus", title:"Constraint-based design of multi-stage core type multipole field electromagnetic launching system (CMFELS) and its possible use in the catapult system", authors:"Kondamudi, Srichandan, and Sandhya Thotakura", journal:"Innovation in Electrical Power Engineering, Communication, and Computing Technology (IEPCCT 2019)", year:2020, volume:"", pages:"499-510", doi:"10.1007/978-981-15-2305-2_40", quartile:"", impact:"", publisher:"Springer Singapore" },
  { cat:"Scopus", title:"Gaussian particle swarm optimization for combined economic emission dispatch", authors:"Varma, S. Chetan, KS Linga Murthy, and K. SriChandan", journal:"2013 ICEETS", year:2013, volume:"", pages:"1336-1340", doi:"10.1109/ICEETS.2013.6533581", quartile:"", impact:"", publisher:"IEEE" },
  { cat:"Scopus", title:"Control and operation of Opti-slip induction generator in wind farms", authors:"Sandhya, T., and K. Sri Chandan", journal:"2011 ICCCET", year:2011, volume:"", pages:"450-454", doi:"10.1109/ICCCET.2011.5762517", quartile:"", impact:"", publisher:"IEEE" },
  { cat:"Scopus", title:"Performance Analysis of Rechargeable Batteries for Electric Vehicles", authors:"Lavanaya, Ch, and K. Sri Chandan Kondamudi", journal:"Journal of Harbin Institute of Technology", year:2022, volume:"54(5)", pages:"16-22", doi:"", quartile:"", impact:"", publisher:"", issn:"0367-6234" },
  { cat:"Scopus", title:"Mathematical Model and Techno-Economic-Environmental impact of Solar PV-Hydrogen based Charging Station for Electric Vehicles", authors:"Prahjval, Ganta Sai, and Kondamudi Srichandan", journal:"2023 ICEPE", year:2023, volume:"", pages:"1-6", doi:"10.1109/ICEPE57949.2023.10201647", quartile:"", impact:"", publisher:"IEEE", issn:"2832-8973" },
  { cat:"Scopus", title:"Combined Economic and Emission Dispatch for a Wind Integrated System Using Particle Swarm Optimization", authors:"G.V.S.Subramanyam, K.S. Linga Murthy, Kondamudi Srichandan", journal:"International Electrical Engineering Journal (IEEJ)", year:2012, volume:"3(2)", pages:"769-775", doi:"", quartile:"", impact:"", publisher:"Wiley" },

  // ---- Crossref / UGC-Care (9) ----
  { cat:"UGC Care", title:"A comprehensive evaluation of the technical, economic, and environmental aspects of utilizing a PV-RO desalination process in a coastal region of Andhra Pradesh", authors:"Somasi Ananthasai, and Kondamudi Srichandan", journal:"Research Square (Preprint)", year:2023, volume:"v1", pages:"", doi:"10.21203/rs.3.rs-2682851/v1", quartile:"", impact:"", publisher:"Research Square" },
  { cat:"UGC Care", title:"A mathematical formulation of inductance for multipole field electromagnetic launcher", authors:"K. Sri Chandan, and P. Mallikarjuna Rao", journal:"International Journal of Pure and Applied Mathematics", year:2018, volume:"118(24)", pages:"1-13", doi:"", quartile:"", impact:"", publisher:"" },
  { cat:"UGC Care", title:"Design and Modelling of AFPM Machines for the Application of Electrical Traction", authors:"Kondamudi Srichandan and T.V. Parasurm", journal:"International Journal of Electronics, Electrical and Computational System", year:2018, volume:"7(3)", pages:"132-140", doi:"", quartile:"", impact:"", publisher:"" },
  { cat:"UGC Care", title:"Realistic Equivalent Circuit Analysis of Single-Sided Linear Induction Motor", authors:"Sandhya T, K. Srichandan, P. Mallikarjuna Rao", journal:"International Journal of Analysis of Electrical Machines", year:2016, volume:"1(1)", pages:"9-15", doi:"", quartile:"", impact:"", publisher:"" },
  { cat:"UGC Care", title:"Modelling and Critical Analysis of a Two Stage Tubular Coil Launcher", authors:"Sandhya, T., K. Sri Chandan, and P. Mallikarjuna Rao", journal:"International Journals of Power Electronics Control Converters", year:2015, volume:"1", pages:"17-24", doi:"", quartile:"", impact:"", publisher:"" },
  { cat:"UGC Care", title:"Electrically Driven Marine Propulsion", authors:"Shraddha Kaushik, K.Sri Chandan, Sandhya Thotakura", journal:"International Journal of Engineering Research and Applications (IJERA)", year:2012, volume:"2(1)", pages:"446-451", doi:"", quartile:"", impact:"", publisher:"", issn:"2248-9622" },
  { cat:"UGC Care", title:"Design and Performance Analysis of Single Sided Linear Induction Motor", authors:"K.S.Lingamurty, P.Mallikarjuna Rao, T. Sandhya, K.Srichandan", journal:"International Journal of Engineering Research and Applications (IJERA)", year:2012, volume:"1(2)", pages:"235-240", doi:"", quartile:"", impact:"", publisher:"", issn:"2248-9622" },
  { cat:"UGC Care", title:"Mitigation of Output Power Fluctuations in Utility Grid using Three Phase Distribution Generation", authors:"T.Sandhya, K.Srichandan", journal:"International Journal of Engineering Science and Technology", year:2010, volume:"2(12)", pages:"7710-7718", doi:"", quartile:"", impact:"", publisher:"" },
  { cat:"UGC Care", title:"Comprehensive Analysis of Octapole Electromagnetic Launcher", authors:"K. Sri Chandan, Dr. P. Mallikarjuna Rao", journal:"International Journal for Research in Applied Science & Engineering Technology (IJRASET)", year:2017, volume:"5(X)", pages:"2146-2154", doi:"", quartile:"", impact:"", publisher:"" }
];

/* ---------------------------------------------------------------------- */
/*  INTERNATIONAL BOOK CHAPTERS (6)                                       */
/* ---------------------------------------------------------------------- */
const BOOK_CHAPTERS = [
  { book:"Advances in Decision Sciences, Image Processing, Security and Computer Vision", chapter:"A Novel Configuration of Multi-stage Outrunner Electromagnetic Launching for Aircraft Catapult System", authors:"Sandhya Thotakura, Kondamudi Srichandan & P. Mallikarjuna Rao", publisher:"Springer, Cham (LAIS, Vol. 4)", doi:"10.1007/978-3-030-24318-0_44", published:"26 July 2019", isbn:"978-3-030-24317-3" },
  { book:"Innovation in Electrical Power Engineering, Communication, and Computing Technology", chapter:"Constraint-Based Design of Multistage Core Type Multipole Field Electromagnetic Launching System (CMFELS) and Its Possible Use in the Catapult System", authors:"Kondamudi Srichandan & Sandhya Thotakura", publisher:"Springer, Cham (LNEE, Vol. 630)", doi:"10.1007/978-981-15-2305-2_40", published:"22 February 2020", isbn:"978-981-15-2304-5" },
  { book:"Smart and Intelligent Systems", chapter:"Design of Multi-Stage Dodecapole Electrical Propelling System (DEPS) and Its Possible Use in the Hyperloop Transportation", authors:"Kondamudi Srichandan & Sandhya Thotakura", publisher:"Springer, Cham (AIS)", doi:"10.1007/978-981-16-2109-3_46", published:"31 August 2021", isbn:"978-981-16-2108-6" },
  { book:"Smart and Intelligent Systems", chapter:"Feasibility Study of Floating Solar–Hydro Hybrid System with IoT", authors:"Satya Vamsi Gudimella, Sandhya Thotakura & Srichandan Kondamudi", publisher:"Springer, Cham (AIS)", doi:"10.1007/978-981-16-2109-3_27", published:"31 August 2021", isbn:"978-981-16-2108-6" },
  { book:"Recent Evolutions in Energy, Drives and e-Vehicles", chapter:"Study on Economic and Technological Feasibility of Solar PV-Powered Desalination Plant at Chinna Rushikonda, Visakhapatnam", authors:"Ananthasai Somasi and Kondamudi Srichandan", publisher:"Springer, Cham (LNEE, Vol. 1162)", doi:"10.1007/978-981-97-0763-8_46", published:"28 August 2024", isbn:"978-981-97-0762-1" },
  { book:"Proceedings of the International Conference on Systems, Control and Automation", chapter:"Effect of Magnetic Field Strength and Different Magnet Positions on Permanent Magnet Crawling Robot Performance", authors:"Kondamudi Srichandan & Sandhya Thotakura", publisher:"Springer (LNEE, Vol. 1260)", doi:"10.1007/978-981-97-0763-8_46", published:"01 April 2025", isbn:"978-981-97-7383-1" }
];

/* ---------------------------------------------------------------------- */
/*  CONFERENCES                                                            */
/* ---------------------------------------------------------------------- */
const CONF_INTERNATIONAL = [
  { title:"Mathematical Model and Techno-Economic-Environmental Impact of Solar PV-Hydrogen based Charging Station for Electric Vehicles", authors:"Prahjval, Ganta Sai, and Kondamudi Srichandan", conf:"2023 5th International Conference on Energy, Power and Environment (ICEPE)", venue:"Shillong, India — organised by NIT Meghalaya", date:"15–17 June 2023", publisher:"IEEE", doi:"10.1109/ICEPE57949.2023.10201647", issn:"2832-8973" },
  { title:"Performance Evaluation on Two Wing Ring Type Armature with Inductive Type Electromagnetic Launching System", authors:"Prasad, Gajja, and Kondamudi Srichandan", conf:"2022 IEEE 10th Power India International Conference (PIICON)", venue:"New Delhi, India — organised by NIT Delhi", date:"25–27 November 2022", publisher:"IEEE", doi:"10.1109/PIICON56320.2022.10045133", issn:"2642-5289" },
  { title:"Design optimization of quad-pole electromagnetic ejection device using particle swarm optimization", authors:"Manohar, Kintali, and Kondamudi Srichandan", conf:"2021 IEEE ICISSGT", venue:"Visakhapatnam, India — organised by IEEE Vizag Bay", date:"13–14 November 2021", publisher:"IEEE", doi:"10.1109/ICISSGT52025.2021.00022", isbn:"978-1-6654-0416-7" },
  { title:"Gaussian particle swarm optimization for combined economic emission dispatch", authors:"Varma, S. Chetan, KS Linga Murthy, and K. SriChandan", conf:"2013 International Conference on Energy Efficient Technologies for Sustainability", venue:"Nagercoil, India", date:"10–12 April 2013", publisher:"IEEE", doi:"10.1109/ICEETS.2013.6533581", isbn:"978-1-4673-6150-7" },
  { title:"Control and operation of Opti-slip induction generator in wind farms", authors:"Sandhya, T., and K. Sri Chandan", conf:"2011 International Conference on Computer, Communication and Electrical Technology (ICCCET)", venue:"Tirunelveli, India", date:"18–19 March 2011", publisher:"IEEE", doi:"10.1109/ICCCET.2011.5762517", isbn:"978-1-4244-9394-4" },
  { title:"Feasibility Study of Floating Solar–Hydro Hybrid System with IoT", authors:"Gudimella, Satya Vamsi, Sandhya Thotakura, and Srichandan Kondamudi", conf:"Smart and Intelligent Systems: Proceedings of SIS 2021", venue:"", date:"2021", publisher:"Springer Singapore", doi:"" },
  { title:"Design of Multi-Stage Dodecapole Electrical Propelling System (DEPS) and Its Possible Use in the Hyperloop Transportation", authors:"Kondamudi, Srichandan, and Sandhya Thotakura", conf:"Smart and Intelligent Systems: Proceedings of SIS 2021", venue:"", date:"2021", publisher:"Springer Singapore", doi:"" },
  { title:"A novel configuration of multi-stage outrunner electromagnetic launching for aircraft catapult system", authors:"Thotakura, Sandhya, Kondamudi Srichandan, and P. Mallikarjuna Rao", conf:"International Conference on Emerging Trends in Engineering (ICETE), Vol. 2", venue:"", date:"2020", publisher:"Springer International Publishing", doi:"" },
  { title:"Constraint-based design of multi-stage core type multipole field electromagnetic launching system (CMFELS) and its possible use in the catapult system", authors:"Kondamudi, Srichandan, and Sandhya Thotakura", conf:"Innovation in Electrical Power Engineering, Communication, and Computing Technology (IEPCCT 2019)", venue:"", date:"2019", publisher:"Springer Singapore", doi:"" },
  { title:"A Graphical User Interface for comprehensive economic analysis of a solar PV system in MATLAB", authors:"Vinay, A. Achuta Rama, and K. Sri Chandan", conf:"2015 EESCO", venue:"Vignan's Institute of Information Technology, Visakhapatnam — Vizag Bay Sub Section", date:"24–25 January 2015", publisher:"IEEE", doi:"10.1109/EESCO.2015.7253675", isbn:"978-1-4799-7676-8" },
  { title:"Performance Analysis of New Quadruple Pole Electromagnetic Ejection Device", authors:"Kondamudi Srichandan", conf:"1st International Conference on Recent Trends in Electrical, Electronics, Communication and Instrumentation Engineering (ICRTEECI-2021)", venue:"CVR College of Engineering, Hyderabad", date:"27–28 December 2021", publisher:"" },
  { title:"Study on Economic and Technological feasibility of Solar PV powered Desalination Plant at Chinni Rushikonda, Visakhapatnam", authors:"Kondamudi Srichandan", conf:"AICTE-sponsored Springer International Conference on Recent Evolutions in Energy, Drives and e-Vehicles", venue:"St. Vincent Pallotti College of Engineering & Technology, Nagpur", date:"16–17 September 2022", publisher:"Springer" },
  { title:"Design Aspects and Estimating Number of Magnets Required for Magnetic Crawling Robot Based on the Payload", authors:"Kondamudi Srichandan", conf:"International Conference on Systems, Control and Automation", venue:"Dept. of Electrical Engineering, NIT Kurukshetra", date:"12–13 May 2023" },
  { title:"Feasibility Study Of Stand-Alone Solar PV Powered Desalination Plant At Yarada, Visakhapatnam", authors:"Kondamudi Srichandan", conf:"International Conference on Advanced & Global Engineering Challenges (AGEC-2023)", venue:"Dept. of EEE, Aditya Engineering College (A), Surampalem", date:"23–24 June 2023" },
  { title:"A Review of Non-Conventional Energy Systems and Energy Regulation Technologies", authors:"Kondamudi Srichandan", conf:"International Conference on Research and Development in Science, Engineering and Technology (ICRDSET-2021)", venue:"St. Anne's College of Engineering and Technology, Panruti, Tamil Nadu", date:"05 March 2021" },
  { title:"Comparative Analysis of Variable Reluctance SRM and Circular Segmented SRM", authors:"Ram Manohar Mokkarala, Kondamudi Srichandan", conf:"National Conference on Contemporary Control in Electrical Engineering (CONCON-2013)", venue:"AU College of Engineering (A), Andhra University, Visakhapatnam", date:"31 May 2013" },
  { title:"Realistic Approach for Design of Single Sided Linear Induction Motor", authors:"Kondamudi Srichandan", conf:"4th International Conference on Science, Engineering and Technology (SET)", venue:"VIT University, Vellore", date:"3–4 May 2012" },
  { title:"Design and Modelling of AFPM Machines for the Application of Electrical Traction", authors:"Kondamudi Srichandan", conf:"International Conference On Innovative Research In Engineering, Science, Management And Humanities (ICIRESMH-2018)", venue:"The Institution of Engineers India, Visvesvaraya Bhavan, Hyderabad", date:"18 March 2018" }
];

const CONF_NATIONAL = [
  { title:"Comparative Analysis of Variable Reluctance SRM and Circular Segmented SRM", authors:"Ram Manohar Mokkarala, Kondamudi Srichandan", conf:"National Conference on Contemporary Control in Electrical Engineering (CONCON-2013)", venue:"AU College of Engineering (A), Andhra University, Visakhapatnam", date:"31 May 2013" },
  { title:"Modeling and Control of Electrically Driven Marine Propulsion", authors:"Shraddha Kaushik, Kondamudi Sri Chandan and Sandhya Thotakura", conf:"National Conference on Advances in Communication, Navigation and Computer Networks (ACNCN-2012)", venue:"AU College of Engineering (A), Andhra University, Visakhapatnam", date:"17–18 March 2012" },
  { title:"A Case Study On Control of WECS Based on PID and Fuzzy Logic Controller", authors:"Kondamudi Srichandan", conf:"National Conference on Innovative Techniques in Power Engineering & Drives (ITPED '10)", venue:"Velammal Engineering College, Chennai", date:"18–19 February 2010" },
  { title:"Application of Unified Power Flow Controller for available transfer capability enhancement using AC Distribution factor", authors:"Kondamudi Srichandan", conf:"Two-day National Level Technical Symposium JIJNASA 2008", venue:"Bhoj Reddy Engineering College for Women, Hyderabad", date:"14–15 March 2008" },
  { title:"Modified iterative method for power flow model with FACTS controllers", authors:"Kondamudi Srichandan", conf:"National Level P.G. Student Technical Symposium (PIC2K7)", venue:"JNTU Ananthapur", date:"28–29 February 2008" },
  { title:"Effects of negative driving torque in servomotor drivers", authors:"Kondamudi Srichandan", conf:"National Level Student Technical Symposium (ARC-07)", venue:"Anil Neerukonda Institute of Technology & Sciences, Visakhapatnam", date:"21–22 September 2007" },
  { title:"Biodiesel tomorrow's fuel", authors:"Kondamudi Srichandan", conf:"National Conference on Developments in Renewable Energy Management (DREEM)", venue:"GITAM College of Engineering, Visakhapatnam", date:"1–2 December 2006" },
  { title:"Application of Unified Power Flow Controller for Available Transfer Capability enhancement using A.C. Distribution Factors", authors:"Kondamudi Srichandan", conf:"2nd National Level Technical Conference (CIPS 2008)", venue:"SRM University, Chennai", date:"18–19 April 2008" },
  { title:"Mathematical Analysis Electro-Magnetic Tubular Launcher", authors:"T. Sandhya & Kondamudi Srichandan", conf:"100th Indian Science Congress", venue:"Calcutta University, Kolkata", date:"3–7 January 2013" },
  { title:"Design and Performance Analysis of VRSRM and CSSSRM", authors:"Ram Manohar Mokkarala, Kondamudi Srichandan", conf:"1st National Conference on Power Electronics Systems & Applications (PESA 2013)", venue:"NIT Rourkela", date:"16–17 March 2013" },
  { title:"Design of Electro-Magnetic Launcher", authors:"—", conf:"National Conference on Contemporary Control and Soft Computing in Electrical Engineering (ConCon-2012)", venue:"Andhra University", date:"30–31 May 2012" },
  { title:"Combined Economic and Emission Dispatch for an Integrated Systems using Genetic Algorithm", authors:"—", conf:"National Conference on Contemporary Control and Soft Computing in Electrical Engineering (ConCon-2012)", venue:"Andhra University", date:"30–31 May 2012" },
  { title:"Power Quality Enhancement Using DC Smart Loads In A Micro Grid", authors:"—", conf:"International Conference (MIPSCCON-2011)", venue:"", date:"7–9 April 2011" },
  { title:"New Scheme For the Power Quality Improvement In A Utility Connected Grid", authors:"—", conf:"International Conference (MIPSCCON-2011)", venue:"", date:"7–9 April 2011" },
  { title:"Usage-Based Methodology for Transmission Network Cost Allocation", authors:"—", conf:"4th National Conference on Advances in Energy Conversion Technologies (AECT 2011)", venue:"", date:"3–5 February 2011" },
  { title:"A New Scheme For the Power Quality Improvement In A Utility Connected Grid", authors:"—", conf:"4th National Conference on Advances in Energy Conversion Technologies (AECT 2011)", venue:"", date:"3–5 February 2011" }
];

const CONF_NATIONAL_ORGANIZED = [
  { title:"Recent Advances in Power, Control and Drives for Sustainable Energy (PCDSE-16)", date:"4–5 March 2016", role:"Organizer" }
];

/* ---------------------------------------------------------------------- */
/*  PATENTS (7)                                                            */
/* ---------------------------------------------------------------------- */
const PATENTS = [
  { title:"IoT-Based Shading Detection And Positioning System For Solar Panels And Method Employed Thereof", appNo:"202341051636", filed:"01/08/2023", published:"01/09/2023", status:"Published" },
  { title:"Closed-Loop Recycling System For Cleaning Solar Panels With Hybrid Filtration And Rainwater Harvesting And Method Employed Thereof", appNo:"202341050102", filed:"25/07/2023", published:"01/09/2023", status:"Published" },
  { title:"Autonomous IoT-Enabled Robotic System And Method For Predicting And Alerting Natural Disasters", appNo:"202441063309", filed:"22/08/2024", published:"13/09/2024", status:"Published" },
  { title:"IoT-Enabled Robotic System And Method For Providing Earthquake Early Warning And Evaluating Infrastructure Damage", appNo:"202441056498", filed:"25/07/2024", published:"27/09/2024", status:"Published" },
  { title:"Advanced Remote Industrial Monitoring And Control System With Cycloconverter-IM Drives And IoT And Method Employed Thereof", appNo:"202441048704", filed:"25/06/2024", published:"12/07/2024", status:"Published" },
  { title:"Method For Adaptive Coil Configuration Using Machine Learning In Modular Hybrid Electromagnetic Launch Systems", appNo:"202541076692", filed:"12/08/2025", published:"05/09/2025", status:"Published" },
  { title:"System And Method For Reducing Energy Consumption In Variable Capacity Desalination Using Axial Flux Heating", appNo:"202541076692", filed:"28/08/2025", published:"26/09/2025", status:"Published" }
];

/* ---------------------------------------------------------------------- */
/*  RESEARCH GUIDANCE                                                      */
/* ---------------------------------------------------------------------- */
const PHD_GUIDANCE = [
  { name:"Kintali Manohar", type:"Part-Time", subject:"Electromagnetic Launchers", title:"A Comprehensive Analysis on Quadrupole Electromagnetic Ejection Device (QEED): Design, Mathematical model, Simulation, and Application", status:"Awarded (2024)", university:"GITAM Deemed to be University" },
  { name:"Somasi Ananthasai", type:"Full-Time", subject:"Feasibility Analysis of Solar PV powered Desalination", title:"Optimal Location Selection for a Solar-Powered Reverse Osmosis Desalination Plant in Visakhapatnam, India: A Comprehensive Multi-Criteria Decision-Making using Fuzzy TOPSIS and Graph Theory Approach", status:"Awarded (2025)", university:"GITAM Deemed to be University" },
  { name:"Gajja Prasad", type:"Part-Time", subject:"Electromagnetic Launchers", title:"Performance Evaluation on Two Wing Ring Type Armature with Inductive Type Electromagnetic Launching System", status:"Awarded (2026)", university:"GITAM Deemed to be University" }
];

const PG_DISSERTATIONS = [
  { name:"Sai Prahjval Ganta", subject:"Power Systems And Automation", title:"Modeling And Simulation Of Standalone Solar PV Powered Charging Stations For Electric And Hydrogen Vehicles", year:2023, university:"GITAM Deemed To Be University" },
  { name:"Sandeep Kumar Das", subject:"Power Systems Automation", title:"Application Of Kite Energy As Distributed Generation And Its Optimal Location And Sizing In Distribution Network", year:2014, university:"GITAM University" },
  { name:"Ram Manohar Mokkarala", subject:"Power Systems And Automation", title:"Design Comparison And Performance Analysis Of Variable Reluctance Switched Reluctance Motor", year:2013, university:"GITAM University" },
  { name:"Shraddha Kaushik", subject:"Power System And Automation", title:"Electrically Driven Marine Propulsion", year:2011, university:"GITAM University" },
  { name:"A Srikanth", subject:"Power Systems And Automation", title:"A New Scheme For The Power Quality Improvement In A Utility Connected Grid", year:2010, university:"GITAM University" },
  { name:"A Satyanarayana", subject:"Power System And Automation", title:"Comparative Study Regarding Control Of Wind Energy Conversion System Based On PID And Fuzzy Logic", year:2009, university:"GITAM University" }
];

/* ---------------------------------------------------------------------- */
/*  WORKSHOPS & FDPs                                                       */
/* ---------------------------------------------------------------------- */
const WORKSHOPS_ORGANIZED = [
  { title:"Two-day workshop on Electrical Machine Modelling and Analysis using ANSYS software for Electric Vehicles", date:"15–16 June 2023" },
  { title:"Two-day event on Global Recycling Day", date:"18 March 2019", venue:"GITAM Deemed to be University" },
  { title:"Expert Lecture on \"Reduced Order Modelling In Control Systems\"", date:"04 December 2015" },
  { title:"One-day National Workshop on \"Challenges Facing Power Sector (CFPS-15)\"", date:"17 July 2015" },
  { title:"Expert Lecture on \"Fuzzy Logic Implementation for System Control\"", date:"28 March 2015" },
  { title:"One-day National Workshop on \"Smart Electric Energy Delivery System (SEEDS-14)\"", date:"28 June 2014" },
  { title:"One-day National Workshop on \"Reactive Power Control and Voltage Stability in Power Systems (RPCVS-14)\"", date:"28 March 2014" },
  { title:"One-day National Workshop on \"Soft Computing Techniques in Estimation and Control (SCTEC-14)\"", date:"22 February 2014" },
  { title:"Expert Lecture on \"Genesis, Genetics and Evolution of Mathematics from Hindu Zero to Number Concept\"", date:"04 January 2014" },
  { title:"One-day National Workshop on \"System Identification and Advances in Control Techniques (SIACT-13)\"", date:"28 December 2013" },
  { title:"3-day Workshop on \"Emerging trends in Automation\", Automation & Control System", date:"18–20 February 2011", venue:"GITAM University" }
];

const WORKSHOPS_ATTENDED = [
  { title:"3-day workshop on \"Pulsed Power Technology and Applications\"", org:"BARCF, Visakhapatnam", date:"25–27 November 2021" },
  { title:"DRDO-sponsored Two-day National Workshop on \"Advances in Design and Control for Performance Enhancement in Permanent Magnet Motors\"", org:"Dept. of EEE, Pondicherry Engineering College, Pondicherry University & DRDO", date:"20–21 April 2011" },
  { title:"Workshop on \"Emerging trends in Automation\", Automation & Control System", org:"Pune", date:"18–20 February 2011" },
  { title:"16th Two-day National Power Systems Conference (NPSC-2010)", org:"Dept. of Electrical Engineering, University College of Engineering (A), Osmania University, Hyderabad", date:"15–17 December 2010" },
  { title:"Two-day national-level workshop on \"Wide Area Monitoring and Control of Sustainable Power Systems\"", org:"", date:"24–25 January 2013" },
  { title:"Continuing Education Program on \"Contemporary Applications of Control Engineering (App Con-2015)\" under TEQIP-II", org:"Dept. of Electrical Engineering, AUCE(A), Andhra University, Visakhapatnam", date:"2015" }
];

const FDP_ATTENDED = [
  { title:"3-day FDP on \"Integrated EV Technologies: Power Train, BMS, Control & Embedded Systems in Electric Vehicles\"", org:"Centre of Excellence (EV-CoE), GITAM University, Bengaluru Campus — Dept. of EECE", date:"02–05 February 2026" },
  { title:"FDP on \"Special Electrical Machines & Drives\"", org:"Dept. of EEE, Amritha Vishwa Vidyapeetaham University, Coimbatore", date:"11–14 June 2012" },
  { title:"FDP on \"Electrical & Energy Studies\"", org:"APSSDC-SIEMENS Centre of Excellence, Andhra University, Visakhapatnam", date:"14–18 May 2018" },
  { title:"FDP on \"Cloud Computing & Service Oriented Architecture\"", org:"GITAM Institute of Technology, GITAM University, Visakhapatnam", date:"16 June 2012" },
  { title:"Seminar on \"MATLAB & Simulink for Engineering Education\"", org:"MathWorks India", date:"07 February 2013" },
  { title:"National Level one-week Online FDP on \"Research Innovation and Emerging Advances in Electrical Engineering (RIEAEE-2022)\"", org:"Dept. of EEE, AITAM, Tekkali", date:"4–9 April 2022" },
  { title:"Five-day FDP on \"Inculcating Universal Human Values in Technical Education\"", org:"AICTE", date:"28 Feb – 4 March 2022" },
  { title:"Three-week FDP on \"Problem-Solving and Programming with Python\"", org:"Dhyanahitha Educational Society", date:"27 April – 17 May 2020" },
  { title:"Two-week FDP on \"Productivity Tools for Teaching Enhancement\"", org:"Dhyanahitha Educational Society", date:"20 April – 3 May 2020" }
];

/* ---------------------------------------------------------------------- */
/*  AWARDS, TRAINING, ONLINE COURSES, PROJECTS, SUBJECTS                  */
/* ---------------------------------------------------------------------- */
const AWARDS = [
  { title:"International Recognition for publishing open access with Elsevier (2020–2022)", desc:"One article was linked to the United Nations Sustainable Development Goals, helping tackle some of the world's greatest challenges." },
  { title:"Best Paper Award — \"Performance Analysis of New Quadruple Pole Electromagnetic Ejection Device\"", desc:"1st International Conference on Recent Trends in Electrical, Electronics, Communication and Instrumentation Engineering (ICRTEECI-2021), 27–28 December 2021, CVR College of Engineering, Hyderabad." }
];

const TRAINING = [
  "Apprenticeship, 2005, Vizag Steel Plant",
  "Course Completion Certificate by Siemens – APSSDC — Basics of Induction Motor",
  "Certified Behaviour and Mentoring Analyst (CBMA)",
  "Diploma of completion in RPA Developer Foundation",
  "ISA-CIAT Training programme on PLC, SCADA, Drives and IEC Standards programming",
  "Training on Advanced Microcontroller under NSTL-CARS project"
];

const ONLINE_COURSES = [
  { title:"Al Fluency Framework & Foundations", org:"Anthropic", date:"Jun 2026" },
  { title:"Introduction to AI", org:"University of Helsinki", date:"Jun 2026" },
  { title:"Teaching the AI Fluency Framework", org:"Anthropic", date:"Mar 2026" },
  { title:"Everyday Excel, Part 2", org:"University of Colorado Boulder ", date:"Jan 2022" },
  { title:"Everyday Excel, Part 1", org:"University of Colorado Boulder ", date:"Jan 2022" },
  { title:"Design Thinking for Innovation", org:"University of Virginia", date:"Apr 2021" },
  { title:"Introduction to Cybersecurity Tools & Cyber Attacks", org:"IBM", date:"Dec 2020" },
  { title:"Electric Utilities Fundamentals and Future", org:"University of Colorado System", date:"Sep 2020" },
  { title:"Wind Energy", org:"Technical University of Denmark (DTU)", date:"Oct 2020" },
  { title:"Powerful Tools for Teaching and Learning: Digital Storytelling", org:"University of Houston", date:"Oct 2020" },
  { title:"Energy: The Enterprise", org:"University at Buffalo, SUNY", date:"Aug 2020" },
  { title:"Introduction to Data Science in Python", org:"University of Michigan", date:"Aug 2020" },
  { title:"Foundations of Virtual Instruction", org:"University of California, Irvine", date:"Aug 2020" },
  { title:"Electric Power Systems", org:"University at Buffalo, SUNY", date:"May 2020" },
  { title:"Data Science Math Skills", org:"Duke University", date:"Jun 2020" },
  { title:"Introduction to Machine Learning", org:"Duke University", date:"Jun 2020" },
  { title:"How to Write and Publish a Scientific Paper", org:"École Polytechnique", date:"Aug 2020" },
  { title:"University Teaching", org:"The University of Hong Kong", date:"Aug 2020" },
  { title:"Autism Spectrum Disorder", org:"University of California, Davis", date:"Sep 2020" },
  { title:"Engaging and Assessing Students with Plickers", org:"Coursera Project", date:"Oct 2020" },
  { title:"Concepts in Python: Loops, Functions and Returns", org:"Coursera Project", date:"Oct 2020" }
];

const BTECH_PROJECTS = [
  "Design and Simulation of Transversal flux Motor For Low Cost Electric Vehicle",
  "Design and Modeling of Axial Flux PM generator with Sinusoidal Control",
  "Design of a Smart Helmet",
  "Cost Benefit Analysis for the integration of P.V. generation",
  "Application of Kite energy as D.G. and its Location in Distribution Network using Sensitivity Analysis",
  "Kite Energy Generation as Distributed Generation",
  "Hybrid Power Generating Systems",
  "Electric Gear By Stator Shift Mechanism On Multi Wound Rotor",
  "Design and Performance Analysis of Linear Switched Reluctance Motor",
  "PELAMIS-740 Wave Energy",
  "TECS for ANN based E-Driven Marine Propulsion System",
  "Prototype design of Linear Induction Motor",
  "Optimization of Economic Dispatch using Genetic Algorithm and Particle Swarm Optimization",
  "Inclusion of Integrated power generation for the Electrically driven Marine Propulsion Systems",
  "Modeling and Control of the Electrically Driven Marine Propulsion systems",
  "Modeling of P.V. cells for a power systems Modeling",
  "Modeling of UPQC for the improvement of the Power Quality",
  "Modeling of the DVR and DSTATCOM for the mitigation of Voltage Sag and Swell",
  "A Case Study on Control of WECS based on PID and Fuzzy Controller",
  "Optimization the Combined Economic Emission Dispatch (CEED) using Radial Basis Function (RBF)",
  "Designing of a Micro grid using MATLAB SIMULINK",
  "A new era of Data Acquisition system — Voltage Sag Mitigation using DSTATCOM for improving power quality"
];

const SUBJECTS = [
  "Solar and Wind Systems", "Renewable Energy Sources", "Electrical Power Generation",
  "Industrial Electrical Systems", "Smart Grid Communication Systems", "Power Systems",
  "Power Systems Operation and Control", "Control System Engineering", "Power Systems Protection",
  "Electrical Machines", "Digital Logic Design", "Problem Solving and Programming with Python",
  "Problem Solving and Programming with C", "Fundamentals of Operating Systems",
  "Introduction to Electrical Vehicle Technology", "Raspberry PI for Begineers"
];

/* ========================================================================
   UTILITIES
   ======================================================================== */
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));

function citationText(p) {
  return `${p.authors}. "${p.title}." ${p.journal}${p.volume ? ", " + p.volume : ""}${p.pages ? ", " + p.pages : ""} (${p.year}).${p.doi ? " https://doi.org/" + p.doi : ""}`;
}

async function copyToClipboard(text, btn) {
  try {
    await navigator.clipboard.writeText(text);
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
    setTimeout(() => { btn.innerHTML = orig; }, 1600);
  } catch (e) {
    console.error("Copy failed", e);
  }
}

/* ========================================================================
   RENDERERS
   ======================================================================== */
function renderProfile() {
  document.querySelectorAll(".js-name").forEach(el => el.textContent = PROFILE.name);
  document.querySelectorAll(".js-designation").forEach(el => el.textContent = PROFILE.designation);
  document.querySelectorAll(".js-institution").forEach(el => el.textContent = PROFILE.institution);
  document.querySelectorAll(".js-email").forEach(el => { el.textContent = PROFILE.email; el.href = "mailto:" + PROFILE.email; });
  document.querySelectorAll(".js-phone").forEach(el => { el.textContent = PROFILE.phone; el.href = "tel:" + PROFILE.phone.replace(/[^\d+]/g,""); });
  document.querySelectorAll(".js-office").forEach(el => el.textContent = PROFILE.office);
  document.querySelectorAll(".js-interests").forEach(el => {
    el.innerHTML = PROFILE.researchInterests.map(i => `<span class="chip">${esc(i)}</span>`).join("");
  });

  const idBar = document.getElementById("idBar");
  if (idBar) {
    const links = [
      { icon:"fa-id-card", label:"ORCID", href: PROFILE.ids.orcid.url },
      { icon:"fa-graduation-cap", label:"Google Scholar", href: "https://scholar.google.com/citations?user=" + PROFILE.ids.scholar[0].id },
      { icon:"fa-database", label:"Scopus", href: "https://www.scopus.com/authid/detail.uri?authorId=" + PROFILE.ids.scopus[0] },
      { icon:"fa-fingerprint", label:"Researcher ID", href: "https://www.researcherid.com/rid/" + PROFILE.ids.researcherId },
      { icon:"fa-landmark", label:"Vidwan", href: "https://vidwan.inflibnet.ac.in/profile/" + PROFILE.ids.vidwan },
      { icon:"fa-chalkboard-user", label:"AICTE ID", href: "#" }
    ];
    idBar.innerHTML = links.map(l => `
      <a class="id-btn" href="${l.href}" target="_blank" rel="noopener" title="${esc(l.label)}">
        <i class="fa-solid ${l.icon}"></i><span>${esc(l.label)}</span>
      </a>`).join("");
  }

  const idDetail = document.getElementById("idDetailGrid");
  if (idDetail) {
    idDetail.innerHTML = `
      <div class="id-row"><span>VIDWAN ID</span><code>${PROFILE.ids.vidwan}</code></div>
      <div class="id-row"><span>ORCID</span><code>${PROFILE.ids.orcid.label}</code></div>
      <div class="id-row"><span>Scopus Author ID</span><code>${PROFILE.ids.scopus.join(" · ")}</code></div>
      <div class="id-row"><span>Researcher ID</span><code>${PROFILE.ids.researcherId}</code></div>
      <div class="id-row"><span>Google Scholar</span><code>${PROFILE.ids.scholar.map(s=>s.label).join(" · ")}</code></div>
      <div class="id-row"><span>AICTE Faculty ID</span><code>${PROFILE.ids.aicte}</code></div>
    `;
  }
}

function renderStats() {
  const stats = [
    { n: PUBLICATIONS.length, label: "Total Publications" },
    { n: PUBLICATIONS.filter(p=>p.cat==="SCI").length, label: "SCI Publications" },
    { n: PUBLICATIONS.filter(p=>p.cat==="WoS").length, label: "WoS Publications" },
    { n: PUBLICATIONS.filter(p=>p.cat==="Scopus").length, label: "Scopus Publications" },
    { n: BOOK_CHAPTERS.length, label: "Book Chapters" },
    { n: PATENTS.length, label: "Patents" },
    { n: CONF_INTERNATIONAL.length, label: "International Conferences" },
    { n: CONF_NATIONAL.length, label: "National Conferences" },
    { n: PHD_GUIDANCE.length, label: "PhD Scholars Guided" },
    { n: PG_DISSERTATIONS.length, label: "PG Dissertations Guided" },
    { n: WORKSHOPS_ORGANIZED.length, label: "Workshops Organized" },
    { n: WORKSHOPS_ATTENDED.length, label: "Workshops Attended" },
    { n: FDP_ATTENDED.length, label: "FDPs Attended" },
    { n: AWARDS.length, label: "Awards" }
  ];
  const grid = document.getElementById("statsGrid");
  grid.innerHTML = stats.map((s,i) => `
    <div class="stat-card" data-aos="fade-up" data-aos-delay="${(i%7)*40}">
      <div class="stat-num" data-target="${s.n}">0</div>
      <div class="stat-label">${esc(s.label)}</div>
    </div>`).join("");
}

function animateCounters() {
  const nums = document.querySelectorAll(".stat-num");
  const seen = new WeakSet();
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !seen.has(entry.target)) {
        seen.add(entry.target);
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10) || 0;
        const dur = 900;
        const start = performance.now();
        function tick(now) {
          const p = Math.min(1, (now - start) / dur);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }
    });
  }, { threshold: 0.4 });
  nums.forEach(n => io.observe(n));
}

/* ---- Publications tabs, filters, search ---- */
const PUB_CATS = ["All","SCI","WoS","ESCI","Scopus","UGC Care"];
let pubState = { cat:"All", year:"All", q:"", sort:"desc" };

function renderPubControls() {
  const tabWrap = document.getElementById("pubTabs");
  tabWrap.innerHTML = PUB_CATS.map(c => {
    const count = c === "All" ? PUBLICATIONS.length : PUBLICATIONS.filter(p=>p.cat===c).length;
    return `<button class="tab-btn ${c===pubState.cat?'active':''}" data-cat="${c}">${esc(c)} <span class="tab-count">${count}</span></button>`;
  }).join("");
  tabWrap.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => { pubState.cat = btn.dataset.cat; renderPubControls(); renderPublications(); });
  });

  const years = [...new Set(PUBLICATIONS.map(p=>p.year))].sort((a,b)=>b-a);
  const yearSel = document.getElementById("pubYearFilter");
  yearSel.innerHTML = `<option value="All">All Years</option>` + years.map(y=>`<option value="${y}">${y}</option>`).join("");
}

function renderPublications() {
  let list = PUBLICATIONS.filter(p => pubState.cat === "All" || p.cat === pubState.cat);
  if (pubState.year !== "All") list = list.filter(p => String(p.year) === pubState.year);
  if (pubState.q.trim()) {
    const q = pubState.q.toLowerCase();
    list = list.filter(p => (p.title+p.authors+p.journal).toLowerCase().includes(q));
  }
  list = [...list].sort((a,b) => pubState.sort === "desc" ? b.year - a.year : a.year - b.year);

  const container = document.getElementById("pubList");
  document.getElementById("pubCount").textContent = `${list.length} publication${list.length!==1?'s':''}`;

  if (!list.length) {
    container.innerHTML = `<p class="empty-note">No publications match these filters.</p>`;
    return;
  }

  container.innerHTML = list.map(p => `
    <article class="pub-card" data-aos="fade-up">
      <div class="pub-card-top">
        <span class="badge badge-${p.cat.replace(/\s+/g,'')}">${esc(p.cat)}</span>
        ${p.quartile ? `<span class="badge badge-outline">${esc(p.quartile)}</span>` : ""}
        <span class="pub-year">${p.year}</span>
      </div>
      <h3 class="pub-title">${esc(p.title)}</h3>
      <p class="pub-authors">${esc(p.authors)}</p>
      <p class="pub-journal"><em>${esc(p.journal)}</em>${p.volume?`, ${esc(p.volume)}`:""}${p.pages?`, pp. ${esc(p.pages)}`:""}${p.publisher?` · ${esc(p.publisher)}`:""}</p>
      <div class="pub-meta">
        ${p.impact ? `<span class="meta-pill"><i class="fa-solid fa-chart-line"></i> IF ${esc(p.impact)}</span>` : ""}
        ${p.issn ? `<span class="meta-pill">ISSN ${esc(p.issn)}</span>` : ""}
      </div>
      <div class="pub-actions">
        ${p.doi ? `<a class="pub-btn" href="https://doi.org/${p.doi}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> DOI</a>` : ""}
        <button class="pub-btn js-cite"><i class="fa-solid fa-quote-right"></i> Citation</button>
        <button class="pub-btn js-copy"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
    </article>`).join("");

  container.querySelectorAll(".pub-card").forEach((card, idx) => {
    const p = list[idx];
    card.querySelector(".js-cite").addEventListener("click", (e) => {
      const existing = card.querySelector(".pub-citation-box");
      if (existing) { existing.remove(); return; }
      const box = document.createElement("div");
      box.className = "pub-citation-box";
      box.textContent = citationText(p);
      card.appendChild(box);
    });
    card.querySelector(".js-copy").addEventListener("click", (e) => copyToClipboard(citationText(p), e.currentTarget));
  });
}

/* ---- Book chapters ---- */
function renderBookChapters() {
  const el = document.getElementById("chapterGrid");
  el.innerHTML = BOOK_CHAPTERS.map(c => `
    <article class="glass-card" data-aos="fade-up">
      <div class="chapter-icon"><i class="fa-solid fa-book-open"></i></div>
      <h3>${esc(c.chapter)}</h3>
      <p class="muted">${esc(c.book)}</p>
      <p class="small">${esc(c.authors)}</p>
      <div class="card-footer-row">
        <span class="meta-pill">${esc(c.publisher)}</span>
        <span class="meta-pill">${esc(c.published)}</span>
      </div>
      ${c.doi ? `<a class="pub-btn" href="https://doi.org/${c.doi}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> DOI</a>` : ""}
    </article>`).join("");
}

/* ---- Conferences ---- */
let confState = { type:"international", sort:"desc" };
function parseConfYear(c) {
  const m = String(c.date).match(/\d{4}/);
  return m ? parseInt(m[0],10) : 0;
}
function renderConferences() {
  const list = confState.type === "international" ? CONF_INTERNATIONAL : CONF_NATIONAL;
  const sorted = [...list].sort((a,b) => confState.sort === "desc" ? parseConfYear(b)-parseConfYear(a) : parseConfYear(a)-parseConfYear(b));
  const el = document.getElementById("confList");
  el.innerHTML = sorted.map(c => `
    <article class="conf-card" data-aos="fade-up">
      <div class="conf-year-badge">${parseConfYear(c) || "—"}</div>
      <div class="conf-body">
        <h3>${esc(c.title)}</h3>
        <p class="pub-authors">${esc(c.authors)}</p>
        <p class="muted"><i class="fa-solid fa-people-group"></i> ${esc(c.conf)}</p>
        ${c.venue ? `<p class="muted"><i class="fa-solid fa-location-dot"></i> ${esc(c.venue)}</p>` : ""}
        <p class="muted"><i class="fa-solid fa-calendar-days"></i> ${esc(c.date)}</p>
        <div class="pub-meta">
          ${c.publisher ? `<span class="meta-pill">${esc(c.publisher)}</span>` : ""}
          ${c.issn ? `<span class="meta-pill">ISSN ${esc(c.issn)}</span>` : ""}
          ${c.isbn ? `<span class="meta-pill">ISBN ${esc(c.isbn)}</span>` : ""}
        </div>
        ${c.doi ? `<a class="pub-btn" href="https://doi.org/${c.doi}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> DOI</a>` : ""}
      </div>
    </article>`).join("");

  document.querySelectorAll(".conf-tab").forEach(b => b.classList.toggle("active", b.dataset.type === confState.type));
  const orgSection = document.getElementById("confOrganizedSection");
  orgSection.style.display = confState.type === "national" ? "block" : "none";
  document.getElementById("confOrganizedList").innerHTML = CONF_NATIONAL_ORGANIZED.map(o => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content"><strong>${esc(o.title)}</strong><span class="muted">${esc(o.date)}</span></div>
    </div>`).join("");
}

/* ---- Patents ---- */
function renderPatents() {
  const el = document.getElementById("patentGrid");
  el.innerHTML = PATENTS.map(p => `
    <article class="glass-card patent-card" data-aos="fade-up">
      <div class="patent-icon"><i class="fa-solid fa-lightbulb"></i></div>
      <span class="badge badge-outline patent-status">${esc(p.status)}</span>
      <h3>${esc(p.title)}</h3>
      <div class="id-row"><span><i class="fa-solid fa-hashtag"></i> Application No.</span><code>${esc(p.appNo)}</code></div>
      <div class="id-row"><span><i class="fa-solid fa-calendar-plus"></i> Filed</span><code>${esc(p.filed)}</code></div>
      <div class="id-row"><span><i class="fa-solid fa-calendar-check"></i> Published</span><code>${esc(p.published)}</code></div>
    </article>`).join("");
}

/* ---- Research guidance ---- */
function renderGuidance() {
  document.getElementById("phdGrid").innerHTML = PHD_GUIDANCE.map(s => `
    <article class="glass-card" data-aos="fade-up">
      <div class="chapter-icon"><i class="fa-solid fa-user-graduate"></i></div>
      <h3>${esc(s.name)}</h3>
      <p class="muted">${esc(s.subject)} · ${esc(s.type)}</p>
      <p class="small">${esc(s.title)}</p>
      <div class="card-footer-row">
        <span class="meta-pill">${esc(s.university)}</span>
        <span class="badge badge-outline">${esc(s.status)}</span>
      </div>
    </article>`).join("");

  document.getElementById("pgGrid").innerHTML = PG_DISSERTATIONS.map(s => `
    <article class="glass-card" data-aos="fade-up">
      <div class="chapter-icon"><i class="fa-solid fa-user-pen"></i></div>
      <h3>${esc(s.name)}</h3>
      <p class="muted">${esc(s.subject)}</p>
      <p class="small">${esc(s.title)}</p>
      <div class="card-footer-row">
        <span class="meta-pill">${esc(s.university)}</span>
        <span class="badge badge-outline">${s.year}</span>
      </div>
    </article>`).join("");
}

/* ---- Workshops timeline ---- */
function timelineHTML(items, dateKey="date") {
  return items.map(i => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <strong>${esc(i.title)}</strong>
        ${i.org ? `<span class="muted">${esc(i.org)}</span>` : (i.venue ? `<span class="muted">${esc(i.venue)}</span>` : "")}
        <span class="muted">${esc(i[dateKey])}</span>
      </div>
    </div>`).join("");
}
function renderWorkshops() {
  document.getElementById("workshopOrganizedList").innerHTML = timelineHTML(WORKSHOPS_ORGANIZED);
  document.getElementById("workshopAttendedList").innerHTML = timelineHTML(WORKSHOPS_ATTENDED);
}

/* ---- FDPs ---- */
function renderFDPs() {
  document.getElementById("fdpAttendedGrid").innerHTML = FDP_ATTENDED.map(f => `
    <article class="glass-card" data-aos="fade-up">
      <div class="chapter-icon"><i class="fa-solid fa-chalkboard-user"></i></div>
      <h3>${esc(f.title)}</h3>
      <p class="muted">${esc(f.org)}</p>
      <span class="meta-pill">${esc(f.date)}</span>
    </article>`).join("");
  document.getElementById("fdpOrganizedNote").textContent = "No FDPs organized are recorded in the source CV.";
}

/* ---- Awards ---- */
function renderAwards() {
  document.getElementById("awardsGrid").innerHTML = AWARDS.map(a => `
    <article class="award-card" data-aos="zoom-in">
      <div class="award-trophy"><i class="fa-solid fa-trophy"></i></div>
      <h3>${esc(a.title)}</h3>
      <p class="muted">${esc(a.desc)}</p>
    </article>`).join("");
}

/* ---- Training & certifications ---- */
function renderTraining() {
  document.getElementById("trainingList").innerHTML = TRAINING.map(t => `
    <div class="cert-item"><i class="fa-solid fa-certificate"></i><span>${esc(t)}</span></div>`).join("");
  document.getElementById("courseGrid").innerHTML = ONLINE_COURSES.map(c => `
    <article class="glass-card small-card" data-aos="fade-up">
      <i class="fa-solid fa-laptop-code"></i>
      <h4>${esc(c.title)}</h4>
      <p class="muted small">${esc(c.org)} · ${esc(c.date)}</p>
    </article>`).join("");
}

/* ---- Teaching ---- */
function renderTeaching() {
  document.getElementById("subjectsList").innerHTML = SUBJECTS.map(s => `<span class="chip"><i class="fa-solid fa-book"></i> ${esc(s)}</span>`).join("");
  document.getElementById("btechGrid").innerHTML = BTECH_PROJECTS.map((p,i) => `
    <article class="glass-card small-card" data-aos="fade-up" data-aos-delay="${(i%6)*30}">
      <i class="fa-solid fa-bolt"></i>
      <p>${esc(p)}</p>
    </article>`).join("");
}

/* ---- Citation trend mini chart ---- */
function renderCitationChart() {
  const el = document.getElementById("citationChart");
  if (!el) return;
  const max = Math.max(...PROFILE.metrics.citationTrend.map(d=>d.value));
  el.innerHTML = PROFILE.metrics.citationTrend.map(d => `
    <div class="bar-wrap">
      <div class="bar" style="--h:${(d.value/max*100).toFixed(0)}%"></div>
      <span class="bar-label">${d.year}</span>
    </div>`).join("");
}

/* ========================================================================
   NAV / UI BEHAVIOR
   ======================================================================== */
function initNav() {
  const links = document.querySelectorAll(".nav-link");
  const sections = [...links].map(l => document.querySelector(l.getAttribute("href")));
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  navToggle.addEventListener("click", () => navMenu.classList.toggle("open"));
  links.forEach(l => l.addEventListener("click", () => navMenu.classList.remove("open")));

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = "#" + entry.target.id;
        links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === id));
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px" });
  sections.forEach(s => s && io.observe(s));
}

function initScrollTop() {
  const btn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
    document.getElementById("mainNav").classList.toggle("scrolled", window.scrollY > 20);
  });
  btn.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));
}

function initDarkMode() {
  const toggle = document.getElementById("themeToggle");
  const stored = null; // no persistent storage per environment constraints
  document.body.classList.toggle("light", false);
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    toggle.innerHTML = isLight ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
  });
}

function initTyping() {
  const el = document.getElementById("typingText");
  const phrases = [
    "Electromagnetic Launcher Systems",
    "Solar PV & RO Desalination",
    "Power Systems Engineering",
    "Electric Vehicle Technologies"
  ];
  let pi = 0, ci = 0, deleting = false;
  function step() {
    const phrase = phrases[pi];
    if (!deleting) {
      ci++;
      el.textContent = phrase.slice(0, ci);
      if (ci === phrase.length) { deleting = true; setTimeout(step, 1400); return; }
    } else {
      ci--;
      el.textContent = phrase.slice(0, ci);
      if (ci === 0) { deleting = false; pi = (pi+1)%phrases.length; }
    }
    setTimeout(step, deleting ? 35 : 60);
  }
  step();
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = document.getElementById("formStatus");
    status.textContent = "Message captured locally — connect this form to an email service or backend to receive submissions.";
    form.reset();
  });
}

function initPubControlsBinding() {
  document.getElementById("pubSearch").addEventListener("input", (e) => { pubState.q = e.target.value; renderPublications(); });
  document.getElementById("pubYearFilter").addEventListener("change", (e) => { pubState.year = e.target.value; renderPublications(); });
  document.getElementById("pubSortBtn").addEventListener("click", (e) => {
    pubState.sort = pubState.sort === "desc" ? "asc" : "desc";
    e.currentTarget.innerHTML = `<i class="fa-solid fa-arrow-${pubState.sort==='desc'?'down':'up'}-wide-short"></i> Year`;
    renderPublications();
  });
}

function initConfTabs() {
  document.querySelectorAll(".conf-tab").forEach(btn => {
    btn.addEventListener("click", () => { confState.type = btn.dataset.type; renderConferences(); });
  });
  document.getElementById("confSortBtn").addEventListener("click", (e) => {
    confState.sort = confState.sort === "desc" ? "asc" : "desc";
    e.currentTarget.innerHTML = `<i class="fa-solid fa-arrow-${confState.sort==='desc'?'down':'up'}-wide-short"></i> Year`;
    renderConferences();
  });
}

/* ========================================================================
   SIGNATURE VISUAL — animated electromagnetic field lines
   Charged particles drifting along sinusoidal flux lines, referencing the
   coil / multipole electromagnetic launcher research in the CV.
   ======================================================================== */
function initFieldCanvas() {
  const canvas = document.getElementById("fieldCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w, h, lines = [], particles = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = Math.max(window.innerHeight, document.getElementById("home").offsetHeight);
    buildLines();
  }

  function buildLines() {
    lines = [];
    const count = Math.max(5, Math.round(w / 220));
    for (let i = 0; i < count; i++) {
      lines.push({
        baseY: (h / (count + 1)) * (i + 1),
        amp: 26 + Math.random() * 34,
        freq: 0.0022 + Math.random() * 0.0018,
        phase: Math.random() * Math.PI * 2,
        speed: 0.15 + Math.random() * 0.25
      });
    }
    particles = lines.map((l, i) => ({ t: Math.random() * w, line: i, speed: 0.4 + Math.random() * 0.6 }));
  }

  function draw(time) {
    ctx.clearRect(0, 0, w, h);
    const isLight = document.body.classList.contains("light");
    ctx.strokeStyle = isLight ? "rgba(20,40,70,0.08)" : "rgba(232,163,61,0.10)";
    ctx.lineWidth = 1;
    lines.forEach(l => {
      ctx.beginPath();
      for (let x = 0; x <= w; x += 8) {
        const y = l.baseY + Math.sin(x * l.freq + l.phase + time * 0.0002 * l.speed) * l.amp;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
    });

    ctx.fillStyle = isLight ? "rgba(232,163,61,0.55)" : "rgba(70,224,200,0.85)";
    particles.forEach(p => {
      const l = lines[p.line];
      p.t += p.speed;
      if (p.t > w) p.t = 0;
      const y = l.baseY + Math.sin(p.t * l.freq + l.phase + time * 0.0002 * l.speed) * l.amp;
      ctx.beginPath();
      ctx.arc(p.t, y, 2.2, 0, Math.PI * 2);
      ctx.fill();
    });

    if (!prefersReduced) requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  requestAnimationFrame(draw);
  if (prefersReduced) draw(0);
}

/* ========================================================================
   INIT
   ======================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initFieldCanvas();
  renderProfile();
  renderStats();
  renderPubControls();
  renderPublications();
  renderBookChapters();
  renderConferences();
  renderPatents();
  renderGuidance();
  renderWorkshops();
  renderFDPs();
  renderAwards();
  renderTraining();
  renderTeaching();
  renderCitationChart();

  initNav();
  initScrollTop();
  initDarkMode();
  initTyping();
  initContactForm();
  initPubControlsBinding();
  initConfTabs();
  animateCounters();

  if (window.AOS) AOS.init({ duration: 650, once: true, offset: 60 });

  document.getElementById("yearNow").textContent = new Date().getFullYear();
});
