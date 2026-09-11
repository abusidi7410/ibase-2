import vsatImage from "@/assets/vsat.webp";
import wirelessImage from "@/assets/Wireless & Wi-Fi Solutions.jpg";
import networkManagementImage from "@/assets/network  management.webp";
import structuredCableImage from "@/assets/structured cable.png";
import networkDesignImage from "@/assets/network design and infrastructure.avif";
import serverRoomImage from "@/assets/server-room.jpg";
import voiImage from "@/assets/VOI.png";
import serverStorageImage from "@/assets/server and storage.png";
import webDevelopmentImage from "@/assets/web-development.jpg";
import consultancyImage from "@/assets/IT CONSULTATION.webp";
import helpdeskSupportImage from "@/assets/helpdesk-support.jpg";
import nitdaImage1 from "@/assets/nitda ict center.jpg";
import nitdaImage2 from "@/assets/nitda ict center 2.jpg";
import nitdaImage3 from "@/assets/nitda ict center 3.jpg";
import kadunaUniversityImage from "@/assets/kaduna state universty.jpg";

export const company = {
  name: "IBASE TECHNOLOGIES LTD",
  shortName: "IBASE Technologies",
  rc: "1026673",
  established: "2012",
  address: ["Suite 1, 2nd Floor, Imam House", "Ahmadu Bello Way", "Kaduna, Nigeria"],
  phones: ["08032846128", "08023687316"],
  email: "info@ibasetechng.com",
  website: "www.ibasetechng.com",
} as const;

export const services = [
  {
    slug: "vsat",
    number: "01",
    title: "VSAT & Satellite Services",
    short:
      "Satellite connectivity for organizations and sites that need dependable access beyond conventional networks.",
    description:
      "IBASE provides satellite connectivity solutions across C-band, KU-band and KA-band environments. Each deployment is scoped around the site's available footprint, the services it must carry and the operating environment it sits in.",
    overview: [
      "For organizations operating in locations where terrestrial connectivity is limited, unreliable or unavailable, IBASE engineers satellite access across C-band, KU-band and KA-band contexts. These frequency bands suit different link budgets, antenna footprints and geographic conditions, so the choice of band is made against the site requirement rather than as a default.",
      "The role of each node in the link is planned together with the wider network — whether the satellite service terminates as the primary internet connection or as a redundant path for an existing terrestrial line. IBASE scope the link so it supports the intended traffic profile, including VPN backhaul, VoIP and streaming requirements.",
      "Installation covers the outdoor units, dish and antenna placement, indoor modem and router integration, and the configuration work that joins the satellite link into the organization's LAN. The wider network services — routing, firewall, bandwidth management — are harmonized with the satellite termination so the end result behaves as one connected environment.",
    ],
    capabilities: [
      "C-band connectivity",
      "KU-band connectivity",
      "KA-band connectivity",
      "Satellite internet",
      "VPN backhaul over satellite",
      "VoIP over satellite",
      "Streaming support",
      "Dish and antenna installation",
      "Modem and router integration",
      "Link integration with LAN",
    ],
    image: "satellite-dish",
  },
  {
    slug: "wireless",
    number: "02",
    title: "Wireless & Wi-Fi Solutions",
    short:
      "Designed wireless links and Wi-Fi environments for offices, campuses and remote connectivity needs.",
    description:
      "From point-to-point and point-to-multipoint links to mesh Wi-Fi and remote connectivity, IBASE approaches wireless as an engineered network: planned, installed and supported around the environment.",
    overview: [
      "Wireless at IBASE is treated as an engineering discipline rather than a set of access points. Coverage planning starts with the physical environment — building layout, campus distances, obstruction and the density of devices that will use the network — before any equipment is placed.",
      "For inter-site and campus connectivity, IBASE designs point-to-point and point-to-multipoint links that carry traffic between buildings and remote locations without relying on cabling between them. This includes the link budget, antenna selection, elevation and alignment work required for a stable, usable link.",
      "Indoors, mesh Wi-Fi and access-point deployments are organized so users move through coverage without dead zones. Interference, channel planning and bandwidth shaping are handled as part of the same deployment so the wireless layer performs predictably under real usage.",
    ],
    capabilities: [
      "Point-to-point links",
      "Point-to-multipoint",
      "Mesh Wi-Fi",
      "Campus-wide coverage",
      "Remote connectivity",
      "Coverage and channel planning",
      "Antenna selection and alignment",
      "Link budget analysis",
      "Access point deployment",
      "Bandwidth shaping",
    ],
    image: "wireless-router",
  },
  {
    slug: "network-management",
    number: "03",
    title: "Network Management",
    short: "Monitoring and diagnostics for routers, switches, servers and wireless infrastructure.",
    description:
      "IBASE supports network supervision through monitoring, traffic visibility, diagnostics and remote management across the equipment and infrastructure a project depends on.",
    overview: [
      "A deployed network needs to be watched to stay healthy. IBASE's network management engagement covers monitoring across the different device classes in the environment — routers, switches, servers and the wireless infrastructure — so faults are visible before they become outages.",
      "Traffic visibility lets the team see where capacity is consumed and where the network approaches its limits. This feeds planning decisions on bandwidth, segmentation and equipment lifecycle, rather than leaving the network to react after problems surface.",
      "Diagnostics and remote management give the support team the ability to investigate and act on issues across managed sites. Combined with the documented support process, network management becomes the operating layer that keeps infrastructure dependable after the initial project handover.",
    ],
    capabilities: [
      "Router monitoring",
      "Switch monitoring",
      "Server monitoring",
      "Wireless infrastructure monitoring",
      "Traffic visibility",
      "Network diagnostics",
      "Remote management",
      "Network supervision",
      "Capacity monitoring",
      "Fault visibility",
    ],
    image: "network-switches",
  },
  {
    slug: "structured-wiring",
    number: "04",
    title: "Structured Cabling & Wiring",
    short:
      "Organized data, fiber, telephony and security cabling that gives networks a dependable physical foundation.",
    description:
      "Structured cabling work covers data cabling, fiber optic networks, IP telephony, security and CCTV cabling, with planning and certification considered as part of the infrastructure lifecycle.",
    overview: [
      "Every network runs on its physical layer. IBASE undertakes structured cabling that organizes data, voice and security circuits into a layout that is documented, testable and maintainable — rather than a patchwork of point-to-point runs.",
      "Coverage includes copper data cabling, fiber optic backbone runs across buildings and campuses, and the patching and termination work that ties everything into server rooms, distribution points and access closets. IP telephony, security and CCTV cabling are handled within the same structured framework.",
      "Good cabling discipline pays off across the life of a network: labelled circuits make moves and fault-finding predictable, and a documented physical layer makes future growth a matter of extension rather than replacement. IBASE plans cabling with that lifecycle in mind.",
    ],
    capabilities: [
      "Structured data cabling",
      "Fiber optic backbone",
      "Copper data runs",
      "Termination and patching",
      "IP telephony cabling",
      "Security cabling",
      "CCTV cabling",
      "Cable labelling",
      "Cabling documentation",
      "Tray, trunking and containment",
    ],
    image: "network-cables",
  },
  {
    slug: "server-room-infrastructure",
    number: "05",
    title: "Server & Computer Room Infrastructure",
    short: "Planning for the physical conditions that keep server and computer rooms serviceable.",
    description:
      "IBASE can plan server room infrastructure around UPS and power systems, cooling, grounding, fire detection, access control and environmental monitoring requirements.",
    overview: [
      "The equipment in a server room is only as reliable as the room it sits in. IBASE plans computer room infrastructure around the environmental conditions the equipment depends on: power integrity, heat removal, grounding and physical protection.",
      "Power planning covers UPS systems and the power distribution path so that critical equipment survives mains interruptions and maintenance windows. Cooling is sized around the heat load of the installed equipment, and grounding is addressed to protect sensitive electronics and data integrity.",
      "Fire detection, access control and environmental monitoring complete the picture. The combination of early warning, restricted physical access and alerting on temperature, humidity or power conditions keeps the room serviceable and the infrastructure inside it protected.",
    ],
    capabilities: [
      "Server room design and planning",
      "UPS systems",
      "Power distribution",
      "Cooling and heat load planning",
      "Grounding",
      "Fire detection",
      "Access control",
      "Environmental monitoring",
      "Physical security for equipment",
      "Rack and layout planning",
    ],
    image: "server-room",
  },
  {
    slug: "network-design",
    number: "06",
    title: "Network Design & Infrastructure",
    short:
      "LAN, WAN, fiber and wireless network planning shaped around the organization and its operating environment.",
    description:
      "The company profile references network planning across LAN, WAN, fiber, wireless, VPN, firewall, routing, BGP, OSPF, hotspots and bandwidth management.",
    overview: [
      "Network design is where IBASE's engineering begins. Rather than assembling off-the-shelf configurations, the team designs the network around the organization: the buildings and geography it covers, the applications it runs and the way its people use the network day to day.",
      "The design layer covers LAN and WAN topology, fiber and wireless backhaul, VPN boundaries, firewall posture and the routing fabric that keeps traffic flowing. The company profile references routing protocols such as BGP and OSPF, reflecting environments that need deliberate routing design rather than flat, single-segment networks.",
      "Bandwidth management and hotspot delivery sit on top of this foundation, controlling how capacity is shared across users and services. The result is a network whose design, physical layer and operating rules are documented and coherent — not a collection of independent decisions.",
    ],
    capabilities: [
      "LAN design",
      "WAN design",
      "Fiber backbone design",
      "Wireless network design",
      "VPN architecture",
      "Firewall and security design",
      "Routing design",
      "BGP",
      "OSPF",
      "Hotspot deployment",
      "Bandwidth management",
      "Network documentation",
    ],
    image: "circuit-board",
  },
  {
    slug: "voip",
    number: "07",
    title: "VoIP Solutions",
    short:
      "Business telephony and voice networks integrated with broader data and video environments.",
    description:
      "IBASE works with voice networks and enterprise communications requirements, including environments where data, voice and video need to operate together.",
    overview: [
      "Voice is moving onto the data network, and that raises the bar for how the network is built and cared for. IBASE works with business telephony and voice networks where call quality depends on the same infrastructure carrying the organization's data.",
      "Deployments are scoped around the organization's communication patterns — extension counts, call volumes, inter-site traffic and how voice interacts with the data environment. The voice layer is planned to run alongside the network so capacity, latency and prioritization behave predictably.",
      "In converged environments where data, voice and video operate together, the network design accounts for each traffic class. This keeps communications dependable for the organization rather than treating telephony as an add-on bolted onto an existing network.",
    ],
    capabilities: [
      "Business telephony",
      "Voice network design",
      "Voice over IP",
      "Extension and call planning",
      "Converged data and voice",
      "Voice and video networks",
      "Enterprise communications",
      "Inter-site voice",
      "Traffic prioritization for voice",
    ],
    image: "business-phone",
  },
  {
    slug: "server-storage",
    number: "08",
    title: "Servers & Storage",
    short: "Server supply, deployment and support for infrastructure environments.",
    description:
      "Server and storage work covers supply, deployment and support. The profile references HP ProLiant and Dell PowerEdge as example platforms in its technical environment.",
    overview: [
      "Servers host the services an organization depends on, from email and file services to applications and databases. IBASE's server work covers the full path: specifying and supplying the right platform, deploying it into the organization's environment and supporting it once operational.",
      "Platform selection is made against the workload. The company profile references HP ProLiant and Dell PowerEdge environments, and the choice between platforms, and the sizing of CPU, memory and storage, is driven by what the server will actually run and how much headroom the organization wants.",
      "Storage infrastructure is planned so data has the capacity and protection the business requires. Deployment includes operating system and service configuration, integration with the network and server room environment, and the documentation and support that keep the environment maintainable.",
    ],
    capabilities: [
      "Server specification",
      "Server supply",
      "Server deployment",
      "Server configuration",
      "Server support",
      "Storage infrastructure",
      "Storage planning",
      "HP ProLiant environments",
      "Dell PowerEdge environments",
      "Workload sizing",
    ],
    image: "server-rack",
  },
  {
    slug: "web-services",
    number: "09",
    title: "Web Services",
    short: "Websites, applications and digital communication solutions for organizations.",
    description:
      "The company profile includes corporate websites, web applications, CMS, e-commerce applications, corporate and community portals, web hosting and related digital communication solutions.",
    overview: [
      "An organization's web presence is part of its technology estate, not an afterthought. IBASE builds and supports web properties — corporate websites, web applications and digital communication solutions — that represent the organization and serve its audience.",
      "Work includes CMS-based sites, e-commerce applications, corporate and community portals and the hosting that keeps them available. Each build is scoped around what the organization needs to communicate, publish or transact online.",
      "Web services benefit from sitting inside IBASE's wider infrastructure work — the hosting, network, security and support arrangements around a site are handled with the same discipline as any other deployed system.",
    ],
    capabilities: [
      "Corporate websites",
      "Web applications",
      "Content management systems (CMS)",
      "E-commerce applications",
      "Corporate portals",
      "Community portals",
      "Web hosting",
      "Digital communication solutions",
      "Site maintenance",
      "Web infrastructure support",
    ],
    image: "web-development",
  },
  {
    slug: "consultancy",
    number: "10",
    title: "IT Consultancy",
    short:
      "Planning, analysis and implementation guidance for technology infrastructure decisions.",
    description:
      "Consultancy work spans IT planning, system analysis, infrastructure design, implementation, integration, training, IT support and technology planning.",
    overview: [
      "Good technology decisions start with understanding the organization. IBASE's consultancy work begins with IT planning and system analysis — establishing what the organization does, where it operates and what its technology currently supports — before recommending direction.",
      "From that analysis, consultancy moves into concrete design: infrastructure design, implementation and integration plans that translate the organization's needs into a buildable technology environment. Expertise is applied to decisions rather than handed over as a one-page overview.",
      "Consultancy also covers the human side of technology — training, IT support structures and ongoing technology planning. This keeps the organization's own capability growing alongside the infrastructure IBASE helps deliver.",
    ],
    capabilities: [
      "IT planning",
      "System analysis",
      "Infrastructure design",
      "Implementation planning",
      "Integration",
      "Technology planning",
      "Training",
      "IT support structuring",
      "Technology strategy",
    ],
    image: "consulting-building",
  },
  {
    slug: "technical-support",
    number: "11",
    title: "Technical Support",
    short:
      "A monitored support process for infrastructure requests, diagnostics and ongoing technical assistance.",
    description:
      "IBASE states that service and support requests can be monitored through its support process. The stated response approach is within one working day during Monday–Friday, 09:00–17:00 GMT+1; this is policy information, not a universal guaranteed SLA.",
    overview: [
      "Technology needs care after the cables are dressed and the configs are loaded. IBASE maintains a technical support process through which service and support requests are raised and monitored — so infrastructure issues have a route into the team rather than lingering as informal calls.",
      "The stated response approach is for support requests to be responded to within one working day, Monday to Friday, between 09:00 and 17:00 GMT+1. This is presented as the company's policy information, not a universal guaranteed service-level commitment; exact terms are agreed per engagement.",
      "Support activity covers technical diagnostics, remote assistance and on-site support depending on the nature of the issue and the arrangement in place. The same discipline applies whether the request is about a switch, a server, a satellite link or an application the organization depends on.",
    ],
    capabilities: [
      "Support request monitoring",
      "Technical diagnostics",
      "Remote assistance",
      "On-site support",
      "Response window (Mon–Fri, 09:00–17:00 GMT+1)",
      "Next-working-day response approach",
      "Infrastructure troubleshooting",
      "Source support across the estate",
    ],
    image: "helpdesk-support",
  },
  {
    slug: "online-technical-support",
    number: "12",
    title: "Online Technical Support",
    short:
      "Remote diagnostics and assistance delivered across the network to supported environments.",
    description:
      "Online technical support brings the IBASE support process to the connected environment, allowing the team to respond to requests, diagnose issues and maintain infrastructure without a physical visit.",
    overview: [
      "Online Technical Support extends the monitored support process across the network. When a request is raised, the team can access the supported environment remotely to run diagnostics and investigate issues — reducing the need for a site visit on many categories of fault.",
      "Remote assistance covers the infrastructure connected to the network: switches, routers, access points, servers and the applications the organization runs. The team works through management interfaces and remote access arrangements agreed with the customer.",
      "Online support operates within the same stated response approach used across IBASE's support process — requests monitored and typically responded to within one working day during the Monday–Friday, 09:00–17:00 GMT+1 policy window. The scope of remote access and coverage is agreed per engagement.",
    ],
    capabilities: [
      "Remote diagnostics",
      "Remote assistance",
      "Remote infrastructure access",
      "Monitored request process",
      "Network-based triage",
      "Switch and router support",
      "Server support",
      "Application support",
      "Response window (Mon–Fri, 09:00–17:00 GMT+1)",
    ],
    image: "helpdesk-support",
  },
  {
    slug: "support-agreement",
    number: "13",
    title: "Support Agreements",
    short:
      "Support structures that can be shaped around availability, hardware and software needs.",
    description:
      "The company profile references a range of support agreement types. Scope and commercial terms should be discussed with IBASE based on the environment and required level of support.",
    overview: [
      "Support agreements turn technical support from an occasional request into a defined arrangement. IBASE offers a range of agreement types, each shaped around the level of availability and coverage an organization needs for its infrastructure.",
      "At the upper end, High-Availability Support is structured for organizations whose operations cannot tolerate extended downtime. Advanced and Standard Support tiers provide progressively lighter coverage, suited to different operational priorities and budgets.",
      "At the base, Basic Hardware Support and Basic Software Support cover the fundamentals of keeping the physical and software environment serviceable. The right tier — and its commercial terms — is agreed with IBASE based on the environment and the required level of support.",
    ],
    capabilities: [
      "High-Availability Support",
      "Advanced Support",
      "Standard Support",
      "Basic Hardware Support",
      "Basic Software Support",
      "Coverage shaped to environment",
      "Terms agreed per engagement",
    ],
    image: "helpdesk-support",
  },
] as const;

export const projects = [
  {
    slug: "nitda-ict-centre",
    client: "NITDA ICT Centre",
    sector: "Government",
    description:
      "Design and implementation of ICT infrastructure for the National Information Technology Development Agency, supporting government digital initiatives.",
    scope: [
      "ICT infrastructure design",
      "Structured networking",
      "Connectivity environments",
      "Server room infrastructure",
      "Network management arrangements",
    ],
    services: [
      "Network Design",
      "Structured Cabling",
      "Server Room Infrastructure",
      "Network Management",
    ],
    location: "Abuja, Nigeria",
  },
  {
    slug: "kaduna-state-university",
    client: "Kaduna State University",
    sector: "Education",
    description:
      "Comprehensive network infrastructure deployment for the university campus, covering structured cabling, wireless access points, server room setup and ongoing technical support.",
    scope: [
      "Campus structured cabling",
      "Wireless access-point deployment",
      "Server room setup",
      "Ongoing technical support",
      "Network integration",
    ],
    services: [
      "Structured Cabling",
      "Wireless Solutions",
      "Server Room Infrastructure",
      "Technical Support",
    ],
    location: "Kaduna, Nigeria",
  },
  {
    slug: "university-of-abuja",
    client: "University of Abuja",
    sector: "Education",
    description:
      "Network infrastructure and connectivity solutions supporting the university's academic and administrative operations across campus facilities.",
    scope: [
      "Network design",
      "Campus structured cabling",
      "Wireless connectivity",
      "Academic and administrative connectivity",
    ],
    services: ["Network Design", "Structured Cabling", "Wireless Solutions"],
    location: "Abuja, Nigeria",
  },
  {
    slug: "ubec",
    client: "UBEC",
    sector: "Government / Education",
    description:
      "ICT infrastructure support for the Universal Basic Education Commission, enabling connectivity and technology access across educational planning environments.",
    scope: [
      "ICT infrastructure support",
      "Connectivity design",
      "Satellite connectivity",
      "Technical support arrangements",
    ],
    services: ["Network Design", "VSAT Services", "Technical Support"],
    location: "Abuja, Nigeria",
  },
  {
    slug: "federal-colleges-of-education",
    client: "Federal Colleges of Education",
    sector: "Education",
    description:
      "Network infrastructure deployment across federal colleges of education, providing structured cabling, wireless connectivity and server environments.",
    scope: [
      "Structured cabling deployment",
      "Wireless connectivity",
      "Server environments",
      "Multi-site coordination",
    ],
    services: ["Structured Cabling", "Wireless Solutions", "Server Infrastructure"],
    location: "Various Locations, Nigeria",
  },
  {
    slug: "nuhu-bamalli-polytechnic",
    client: "Nuhu Bamalli Polytechnic",
    sector: "Education",
    description:
      "Campus-wide networking infrastructure including fiber optic cabling, wireless coverage and server room design for the polytechnic's academic environment.",
    scope: [
      "Fiber optic cabling",
      "Campus wireless coverage",
      "Server room design",
      "Academic network environment",
    ],
    services: ["Structured Cabling", "Network Design", "Wireless Solutions"],
    location: "Zaria, Nigeria",
  },
  {
    slug: "phcn",
    client: "PHCN",
    sector: "Telecommunications / Infrastructure",
    description:
      "Technical infrastructure and connectivity solutions for power distribution communications, supporting operational networks across facilities.",
    scope: [
      "Operational network connectivity",
      "Network design",
      "Structured cabling",
      "Satellite connectivity",
    ],
    services: ["Network Design", "Structured Cabling", "VSAT Services"],
    location: "Nigeria",
  },
  {
    slug: "nigerian-union-of-teachers",
    client: "Nigerian Union of Teachers",
    sector: "Public Sector",
    description:
      "ICT infrastructure and connectivity solutions supporting the union's organizational operations and communication requirements.",
    scope: ["ICT infrastructure", "Connectivity solutions", "Network design", "Technical support"],
    services: ["Network Design", "Structured Cabling", "Technical Support"],
    location: "Nigeria",
  },
  {
    slug: "kaduna-state-ministries",
    client: "Kaduna State Ministries",
    sector: "Government",
    description:
      "Network infrastructure and connectivity solutions across Kaduna State Government ministries, supporting government operations with reliable ICT environments.",
    scope: [
      "Network infrastructure",
      "Government ICT environments",
      "Network management",
      "Technical support",
    ],
    services: ["Network Design", "Structured Cabling", "Network Management", "Technical Support"],
    location: "Kaduna, Nigeria",
  },
  {
    slug: "icare-microfinance-bank",
    client: "iCare Microfinance Bank",
    sector: "Financial Services",
    description:
      "Complete ICT infrastructure for the microfinance bank, including structured cabling, server room, network security and ongoing support for financial operations.",
    scope: [
      "Structured cabling",
      "Server room infrastructure",
      "Network security",
      "Ongoing support agreement",
      "Financial operations support",
    ],
    services: [
      "Network Design",
      "Structured Cabling",
      "Server Infrastructure",
      "Support Agreements",
    ],
    location: "Nigeria",
  },
] as const;

export const industries = [
  {
    title: "Government",
    description:
      "Infrastructure and connectivity planning for public-sector environments and ministries.",
  },
  {
    title: "Education",
    description: "Networks and access environments for universities, polytechnics and colleges.",
  },
  {
    title: "Telecommunications",
    description:
      "Technical infrastructure across connectivity, wireless and communications layers.",
  },
  {
    title: "Banking & Financial Services",
    description:
      "Infrastructure support for organizations where network availability matters to daily operations.",
  },
  {
    title: "Hospitality",
    description:
      "Network and access requirements across guest, staff and operational environments.",
  },
  {
    title: "SMEs & Large Organizations",
    description:
      "Right-sized ICT planning, implementation and support for different organizational scales.",
  },
  {
    title: "Technology & ICT",
    description:
      "Engineering capability for organizations operating in and around the technology sector.",
  },
] as const;

export const serviceImages: Record<string, string> = {
  "satellite-dish": vsatImage,
  "wireless-router": wirelessImage,
  "network-switches": networkManagementImage,
  "network-cables": structuredCableImage,
  "server-room": serverRoomImage,
  "circuit-board": networkDesignImage,
  "business-phone": voiImage,
  "server-rack": serverStorageImage,
  "web-development": webDevelopmentImage,
  "consulting-building": consultancyImage,
  "helpdesk-support": helpdeskSupportImage,
};

export const projectImageGalleries: Record<string, string[]> = {
  "nitda-ict-centre": [nitdaImage1, nitdaImage2, nitdaImage3],
  "kaduna-state-university": [kadunaUniversityImage],
};
