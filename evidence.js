export const evidence = [
    // CASE-001 EVIDENCE
    { caseId: "CASE-001", id: "EVD-101", name: "The 16th-Century Canvas", type: "Physical Artifact", description: "A beautifully preserved painting with a series of microscopic numbers etched into the dried oil paint. Ultraviolet scanning reveals they are modern additions.", unlockCondition: null },
    { caseId: "CASE-001", id: "EVD-102", name: "Vault Access Logs", type: "Digital File", description: "Electronic records showing the biometric scanner was bypassed at 2:14 AM using a cloned retinal signature.", unlockCondition: "hack_terminal" },
    { caseId: "CASE-001", id: "EVD-103", name: "Autopsy Report", type: "Medical File", description: "Indicates death by a rare, fast-acting neurotoxin. No sign of a struggle. The toxin is exclusively traced to a specific black-market supplier.", unlockCondition: "request_coroner" },
    { caseId: "CASE-001", id: "EVD-104", name: "Cryptic Note", type: "Document", description: "Found balled up in the victim's pocket: 'They know it's a fake. Meeting him tonight to negotiate the silence.'", unlockCondition: "search_body" },

    // CASE-002 EVIDENCE
    { caseId: "CASE-002", id: "EVD-201", name: "Annotated Blueprints", type: "Document", description: "Architectural drawings of the financial district. Several structural pillars have been erased and redrawn to accommodate a massive, undocumented underground vault.", unlockCondition: null },
    { caseId: "CASE-002", id: "EVD-202", name: "Abandoned Hard Hat", type: "Physical Artifact", description: "Found near a sealed service grate. Inside the rim is a partial fingerprint and traces of a rare subterranean fungus.", unlockCondition: "search_tunnels" },
    { caseId: "CASE-002", id: "EVD-203", name: "Offshore Bank Records", type: "Financial Record", description: "Shows regular, large deposits into Vance's account from a shell corporation tied to Carmine Falcone.", unlockCondition: "decrypt_laptop" },
    { caseId: "CASE-002", id: "EVD-204", name: "Threatening Voicemail", type: "Audio File", description: "A distorted voice warning Vance to 'stop digging where he doesn't belong before the city buries him.'", unlockCondition: "access_phone" },

    // CASE-003 EVIDENCE
    { caseId: "CASE-003", id: "EVD-301", name: "Intercepted Radio Frequency", type: "Audio File", description: "A shortwave broadcast of coordinated delivery times, disguised as seemingly random weather reports for non-existent cities.", unlockCondition: null },
    { caseId: "CASE-003", id: "EVD-302", name: "Subway Maintenance Logs", type: "Digital File", description: "Shows scheduled 'power outages' on Line 4 exactly matching the times of the intercepted weather broadcasts.", unlockCondition: "hack_transit_database" },
    { caseId: "CASE-003", id: "EVD-303", name: "Crate of Contraband", type: "Physical Artifact", description: "A wooden crate left on a disused platform containing stolen Byzantine artifacts. The shipping manifest is signed with a forged signature.", unlockCondition: "explore_platform" },
    { caseId: "CASE-003", id: "EVD-304", name: "Muddy Boot Prints", type: "Forensic Evidence", description: "Distinctive tread marks matching a high-end, custom-made hunting boot, completely out of place in a dirty subway tunnel.", unlockCondition: "scan_platform" },

    // CASE-004 EVIDENCE
    { caseId: "CASE-004", id: "EVD-401", name: "Triangulation Data", type: "Digital File", description: "Radio telemetry proving the signal is broadcasting from coordinates in an empty field that was supposedly paved over during the Berlin Wall's fall.", unlockCondition: null },
    { caseId: "CASE-004", id: "EVD-402", name: "Old KGB Dossier", type: "Document", description: "A heavily redacted file outlining a sleeper cell operation in 1984. The broadcasted secrets perfectly match the operations detailed in this file.", unlockCondition: "access_archives" },
    { caseId: "CASE-004", id: "EVD-403", name: "Cassette Tape Recording", type: "Audio File", description: "The original master recording of the broadcast. Background noise analysis reveals the distinct hum of a modern cooling server.", unlockCondition: "search_field" },
    { caseId: "CASE-004", id: "EVD-404", name: "Soil Density Scan", type: "Scientific Data", description: "Ground-penetrating radar shows a hollow bunker structure buried twenty feet beneath the empty field.", unlockCondition: "run_gpr" },

    // CASE-005 EVIDENCE
    { caseId: "CASE-005", id: "EVD-501", name: "Glass Wolf Figurine", type: "Physical Artifact", description: "A perfectly flawless, hand-blown glass wolf. A microdot containing a dormant virus payload is embedded in the glass.", unlockCondition: null },
    { caseId: "CASE-005", id: "EVD-502", name: "Server Wipe Malware Code", type: "Digital File", description: "The source code of the virus. The architecture is brilliant, bearing the hallmarks of a specific cyber-espionage toolkit thought destroyed.", unlockCondition: "analyze_servers" },
    { caseId: "CASE-005", id: "EVD-503", name: "Threatening Email Trace", type: "Digital File", description: "An anonymous warning sent to the CEOs. The IP address bounced through a dozen proxies but briefly pinged a local coffee shop's public Wi-Fi.", unlockCondition: "trace_ip" },
    { caseId: "CASE-005", id: "EVD-504", name: "Delivery Drone Log", type: "Digital File", description: "Flight paths of an unregistered drone used to drop the figurines on the CEOs' balconies. The drone was launched from a high-rise owned by a rival firm.", unlockCondition: "hack_drone" },

    // CASE-006 EVIDENCE
    { caseId: "CASE-006", id: "EVD-601", name: "Burnt Passport", type: "Physical Artifact", description: "Only the corner remains intact. It shows an entry stamp for a country that officially doesn't exist anymore.", unlockCondition: null },
    { caseId: "CASE-006", id: "EVD-602", name: "Rusted Key", type: "Physical Artifact", description: "A heavy iron key with no teeth. It appears to be a magnetic induction key for a high-security lockbox.", unlockCondition: "search_debris" },
    { caseId: "CASE-006", id: "EVD-603", name: "Undeveloped 35mm Film", type: "Photographic Evidence", description: "When developed in a darkroom, the photos reveal a clandestine meeting between a known senator and an unidentified operative.", unlockCondition: "develop_film" },
    { caseId: "CASE-006", id: "EVD-604", name: "Redacted Agency File", type: "Document", description: "A heavily blacked-out document detailing Project: BLINDSPOT. The only readable words are 'Total Eradication Protocol.'", unlockCondition: "decipher_file" }
];