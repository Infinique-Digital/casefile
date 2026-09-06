export const evidence = [
    // CASE-001 EVIDENCE
    { 
        caseId: "CASE-001", 
        id: "EVD-101", 
        name: "The 16th-Century Canvas", 
        type: "Physical Artifact", 
        description: "A beautifully preserved painting with a series of microscopic numbers etched into the oil paint. Restoration expert confirms the numbers were added AFTER the painting's creation, approximately 2 months before the murder. The numbers form coordinates pointing to a Swiss bank account. Only the appraiser, museum director, and insurance adjuster knew of this hidden marker.",
        descriptionHidden: "A preserved painting with microscopic markings..."
    },
    { 
        caseId: "CASE-001", 
        id: "EVD-102", 
        name: "Vault Access Logs", 
        type: "Digital File", 
        description: "Electronic records showing the biometric scanner was bypassed at 2:14 AM using a cloned retinal scan. Investigation reveals only 3 people had authorized access to clone technology: the museum's head of security Dr. Helena Price, the insurance company's fraud investigator Marcus Chen, and the victim's business partner Victoria Sterling. Price has impeccable 15-year employment record. Chen has unexplained financial troubles.",
        descriptionHidden: "Vault accessed via cloned biometric scan..."
    },
    { 
        caseId: "CASE-001", 
        id: "EVD-103", 
        name: "Autopsy Report", 
        type: "Medical File", 
        description: "Indicates death by a rare, fast-acting neurotoxin extracted from tropical dart frogs. No sign of struggle. The toxin is exclusively available through a black market dealer in Singapore. Financial records show that Victoria Sterling spent $2.3 million in Singapore three weeks before the murder, staying at the same hotel where the toxin dealer operates. Sterling has heavy gambling debts.",
        descriptionHidden: "Death caused by rare tropical toxin..."
    },
    { 
        caseId: "CASE-001", 
        id: "EVD-104", 
        name: "Cryptic Note", 
        type: "Document", 
        description: "Found balled up in the victim's pocket: 'They know it's a fake. Meeting him tonight to negotiate the switch. If he won't cooperate, the deal goes south.' Handwriting analysis matches Victoria Sterling's writing from gallery correspondence. This proves she was meeting the appraiser to replace the real canvas with a forgery and claim insurance fraud.",
        descriptionHidden: "Handwritten note mentioning 'the switch'..."
    },

    // CASE-002 EVIDENCE
    { 
        caseId: "CASE-002", 
        id: "EVD-201", 
        name: "Annotated Blueprints", 
        type: "Document", 
        description: "Architectural drawings of the financial district with several structural pillars marked for 'removal.' The annotations are in the handwriting of Marcus Vance, the missing engineer. Technical notes describe a subterranean level containing abandoned cold war-era vaults. Three construction foreman had access to the blueprints: Robert Hayes (current supervisor), David Liu (retired but consulting), and Sarah Martinez (independent contractor with previous theft charges).",
        descriptionHidden: "Architectural drawings with mysterious annotations..."
    },
    { 
        caseId: "CASE-002", 
        id: "EVD-202", 
        name: "Abandoned Hard Hat", 
        type: "Physical Artifact", 
        description: "Found near a sealed service grate. Inside the rim is a partial fingerprint and traces of a synthetic sedative (the same drug used to incapacitate Vance). The hard hat belongs to Sarah Martinez. GPS data from her phone shows she visited the service grate location exactly 4 hours before Vance's disappearance. She has a criminal history of industrial espionage.",
        descriptionHidden: "Hard hat with fingerprints and drug residue..."
    },
    { 
        caseId: "CASE-002", 
        id: "EVD-203", 
        name: "Offshore Bank Records", 
        type: "Financial Record", 
        description: "Shows regular, large deposits into Vance's account from a shell corporation tied to an international antiquities smuggling ring. The ring seeks to access the underground vaults to loot historically valuable artifacts. Bank records show Sarah Martinez is the company's procurement officer, creating a direct money trail linking her to the kidnapping for vault access exploitation.",
        descriptionHidden: "Unexplained deposits from suspicious sources..."
    },
    { 
        caseId: "CASE-002", 
        id: "EVD-204", 
        name: "Threatening Voicemail", 
        type: "Audio File", 
        description: "A distorted voice warning Vance to 'stop digging where he doesn't belong before the city buries you with it.' Voice analysis narrows it to Sarah Martinez. The message was left 12 hours before his disappearance. Combined with the hard hat evidence, SMS records show Martinez and an unknown accomplice David Liu exchanging coded messages about 'storage access' and 'package delivery.'",
        descriptionHidden: "Threatening message about 'digging'..."
    },

    // CASE-003 EVIDENCE
    { 
        caseId: "CASE-003", 
        id: "EVD-301", 
        name: "Intercepted Radio Frequency", 
        type: "Audio File", 
        description: "A shortwave broadcast of coordinated delivery times, disguised as seemingly random weather reports. Signals analyst decrypted the pattern: mentions of 'midnight pickups' on Line 4 (the subway line) exactly matching the night shift changes. The broadcaster's vocal patterns match transit worker records. Three employees work night shift on Line 4: Thomas Miller (20 years service), Rebecca Cross (2 years, former customs officer), and James Wong (4 years).",
        descriptionHidden: "Encrypted radio communications about deliveries..."
    },
    { 
        caseId: "CASE-003", 
        id: "EVD-302", 
        name: "Subway Maintenance Logs", 
        type: "Digital File", 
        description: "Shows scheduled 'power outages' on Line 4 exactly matching the times of the intercepted smuggling broadcasts over the last 8 months. The outage requests were all filed by Rebecca Cross. Her access key was used to disable camera feeds during these times. Transit authority confirms Cross has been flagged for financial irregularities—she's received $47,000 in untraceable deposits over the past 6 months.",
        descriptionHidden: "Convenient power outages on smuggling nights..."
    },
    { 
        caseId: "CASE-003", 
        id: "EVD-303", 
        name: "Crate of Contraband", 
        type: "Physical Artifact", 
        description: "A wooden crate left on a disused platform containing stolen Byzantine artifacts worth $3.2 million. The crate's construction matches woodworking patterns used by a London-based smuggling ring. Shipping manifests show the crate was routed through three transit stations controlled by Rebecca Cross and her accomplice James Wong. Phone records show Cross and Wong coordinated pickups during blacked-out camera hours.",
        descriptionHidden: "Wooden crate with ancient artifacts inside..."
    },
    { 
        caseId: "CASE-003", 
        id: "EVD-304", 
        name: "Muddy Boot Prints", 
        type: "Forensic Evidence", 
        description: "Distinctive tread marks matching a high-end, custom-made hunting boot, completely out of place in an underground station. The boots are a limited edition model, only 150 pairs sold in the UK in the past year. One pair was purchased by James Wong using a credit card tied to his address. DNA from mud in the tread matches Wong's profile from employment records. He also has prior convictions for smuggling.",
        descriptionHidden: "Unique boot prints in underground location..."
    },

    // CASE-004 EVIDENCE
    { 
        caseId: "CASE-004", 
        id: "EVD-401", 
        name: "Triangulation Data", 
        type: "Digital File", 
        description: "Radio telemetry proving the signal is broadcasting from coordinates in an empty field that hasn't existed since 1984—the exact location now houses the Berlin Historical Archives facility. Only three employees had authorization to broadcast from the facility's restricted equipment room: Dr. Wilhelm Bauer (facility director, 30 years), Petra Hoffmann (engineer, 8 years, personal debt problems), and Viktor Petrov (visiting technician from Russia, recently hired).",
        descriptionHidden: "Signal originates from secure government facility..."
    },
    { 
        caseId: "CASE-004", 
        id: "EVD-402", 
        name: "Old KGB Dossier", 
        type: "Document", 
        description: "A heavily redacted file outlining a sleeper cell operation in 1984. The broadcasted secrets perfectly match classified information contained only in this specific dossier. The file was stored in the Berlin Archives vault. Access logs show Viktor Petrov entered the restricted archives 47 times in his 6 months of employment—far more than necessary for his listed duties. His real identity: grandson of a former KGB colonel. Russian authorities confirm he's an FSB operative.",
        descriptionHidden: "Historical document with redacted information..."
    },
    { 
        caseId: "CASE-004", 
        id: "EVD-403", 
        name: "Cassette Tape Recording", 
        type: "Audio File", 
        description: "The original master recording of the broadcast. Background noise analysis reveals the distinctive hum of archive facility power generators and the unique acoustic properties of the restricted equipment room. Voiceprint analysis confirms the broadcaster is Viktor Petrov. The recording was made using equipment only available in that specific room, accessed via Petrov's biometric clearance card. Petrov admitted under interrogation he was ordered by FSB to destabilize Western intelligence agencies.",
        descriptionHidden: "Master recording with background noise patterns..."
    },
    { 
        caseId: "CASE-004", 
        id: "EVD-404", 
        name: "Soil Density Scan", 
        type: "Scientific Data", 
        description: "Ground-penetrating radar shows a hollow bunker structure buried twenty feet beneath the empty field mentioned in triangulation data. This 1984 bunker was used to broadcast disinformation during the Cold War. Maintenance records show Viktor Petrov accessed the bunker maintenance tunnels during his archive facility employment using a classified Soviet-era pass found in his possession. The bunker's broadcasting equipment was reactivated recently using spare parts from the archive facility.",
        descriptionHidden: "Underground structure detected beneath surface..."
    },

    // CASE-005 EVIDENCE
    { 
        caseId: "CASE-005", 
        id: "EVD-501", 
        name: "Glass Wolf Figurine", 
        type: "Physical Artifact", 
        description: "A perfectly flawless, hand-blown glass wolf. A microdot containing a dormant virus payload is embedded inside the glass (only visible under microscope). This specific glass-blowing technique is only practiced by four artisans worldwide. Delivery tracking shows all six figurines were crafted by Isabella Renaldi, a reclusive Italian glass artist. She recently received $5.8 million in cryptocurrency from anonymous sources. Her son, tech genius Adrian Renaldi, is a malware architect currently employed by the targeted CEOs' companies.",
        descriptionHidden: "Pristine glass figurine with hidden device..."
    },
    { 
        caseId: "CASE-005", 
        id: "EVD-502", 
        name: "Server Wipe Malware Code", 
        type: "Digital File", 
        description: "The source code of the virus. The architecture is brilliant, bearing the hallmarks of Adrian Renaldi's previous work (confirmed through code signature analysis). The virus was designed to activate only when physically present near a radio frequency emitter—the glass figurines contain the exact frequency. This proves premeditation and insider knowledge of each CEO's office layout and security protocols. Adrian had previous employment at 4 of the 6 targeted companies.",
        descriptionHidden: "Complex virus code with unique architecture..."
    },
    { 
        caseId: "CASE-005", 
        id: "EVD-503", 
        name: "Threatening Email Trace", 
        type: "Digital File", 
        description: "An anonymous warning sent to the CEOs stating 'Your greed ends in 24 hours.' The IP address bounced through a dozen proxies, but deep packet inspection revealed the original sender's timezone and payment system usage. This traces back to Adrian Renaldi's VPN subscriptions and cryptocurrency wallet. His mother Isabella confirmed he was deeply resentful about being fired from tech companies for 'ethical concerns' regarding corporate data practices.",
        descriptionHidden: "Threatening message through anonymous channels..."
    },
    { 
        caseId: "CASE-005", 
        id: "EVD-504", 
        name: "Delivery Drone Log", 
        type: "Digital File", 
        description: "Flight paths of an unregistered drone used to drop the figurines on the CEOs' balconies. The drone's firmware contains a unique identifier linked to a drone purchased by Adrian Renaldi 8 months ago. GPS coordinates show the launch point was always within 2 miles of Adrian's apartment building. The delivery pattern matches his work schedule—all deliveries occurred during his lunch breaks from a nearby tech company. His credit card records show purchases of drone parts matching the unregistered drone's components.",
        descriptionHidden: "Drone delivery pattern analysis..."
    },

    // CASE-006 EVIDENCE
    { 
        caseId: "CASE-006", 
        id: "EVD-601", 
        name: "Burnt Passport", 
        type: "Physical Artifact", 
        description: "Only the corner remains intact. It shows an entry stamp for a country that officially doesn't exist (dissolved in 1991). The remaining pages contain visa stamps for 17 countries, all visited within a 6-month period two years ago. The photo section (though charred) shows facial recognition match to Alexei Volkov, a former SVR (Russian Foreign Intelligence) operative. Three intelligence agencies have flagged Volkov as potentially active in Europe. His known associate is Marcus Chen, who appears in CASE-001 evidence.",
        descriptionHidden: "Partially destroyed passport from foreign country..."
    },
    { 
        caseId: "CASE-006", 
        id: "EVD-602", 
        name: "Rusted Key", 
        type: "Physical Artifact", 
        description: "A heavy iron key with no teeth. It appears to be a magnetic induction key for a high-security facility. Metallurgy analysis shows it's made from Soviet-era steel. The unique magnetic pattern signature matches only one facility: a Cold War espionage training center in Eastern Europe that was abandoned in 1989. Volkov's personnel file confirms he received training at this exact facility. The key's rust pattern indicates it's been exposed to Baltic Sea salt water for approximately 2 years.",
        descriptionHidden: "Specialized key with magnetic encoding..."
    },
    { 
        caseId: "CASE-006", 
        id: "EVD-603", 
        name: "Undeveloped 35mm Film", 
        type: "Photographic Evidence", 
        description: "When developed in a darkroom, the photos reveal a clandestine meeting between Alexei Volkov and high-ranking officials from three different intelligence agencies. The meeting location is identified as the secret bunker discovered in CASE-004 evidence. The photos show Volkov handing over classified documents and receiving a substantial cash payment. The officials are identified as members of a corrupt intelligence syndicate selling classified information to the highest bidder. Viktor Petrov from CASE-004 is visible in background photos.",
        descriptionHidden: "Photos reveal covert meetings and transactions..."
    },
    { 
        caseId: "CASE-006", 
        id: "EVD-604", 
        name: "Redacted Agency File", 
        type: "Document", 
        description: "A heavily blacked-out document detailing Project: BLINDSPOT—an operation to eliminate or capture deep-cover operatives attempting to expose intelligence corruption. The only readable words are 'Total Elimination Authorized' and the names of six targets. Three of those names match victims from CASE-001 (art appraiser), CASE-002 (Marcus Vance), and CASE-005 (the CEOs). Cross-referencing shows Alexei Volkov is the documented project coordinator. His mission was to eliminate these whistleblowers before they could expose the intelligence syndicate. The document is signed by Viktor Petrov's superior officer.",
        descriptionHidden: "Classified operational document [REDACTED]..."
    }
];

// Prevent evidence array from being modified
Object.freeze(evidence);
