let appData = [
    // --- DERMATOLOGIE ---
    { chapitre: "Dermatologie", pathologie: "Acné de l'adolescent", page: "1", summary: "Prise en charge locale et systémique.", traitement: [{type: "local", nom: "Peroxyde de benzoyle 5%", poso: "1 app/soir"}, {type: "general", nom: "Doxycycline 100mg", poso: "1 cp/jour, 3 mois"}], conseils: "Protection solaire obligatoire." },
    { chapitre: "Dermatologie", pathologie: "Dermatite atopique", page: "5", summary: "Poussées et entretien.", traitement: [{type: "local", nom: "Dermocorticoïde classe II", poso: "1 app/jour"}, {type: "local", nom: "Émollient", poso: "2 app/jour"}], conseils: "Pas de laine, température 18°C." },
    { chapitre: "Dermatologie", pathologie: "Impetigo", page: "22", summary: "Infection bactérienne.", traitement: [{type: "local", nom: "Acide fusidique", poso: "3 app/jour"}], conseils: "Hygiène des mains, ongles courts." },
    { chapitre: "Dermatologie", pathologie: "Gale", page: "15", summary: "Éradication complète.", traitement: [{type: "general", nom: "Ivermectine", poso: "200µg/kg à J0 et J14"}], conseils: "Traitement de tout le foyer." },
    { chapitre: "Dermatologie", pathologie: "Urticaire aiguë", page: "18", summary: "Réactions cutanées allergiques.", traitement: [{type: "general", nom: "Antihistaminique H1", poso: "1 prise/jour, 5-7 jours"}], conseils: "Rechercher allergène." },
    { chapitre: "Dermatologie", pathologie: "Verrues vulgaires", page: "25", summary: "Traitements kératolytiques.", traitement: [{type: "local", nom: "Acide salicylique", poso: "1 app/jour"}], conseils: "Protéger peau saine." },
    { chapitre: "Dermatologie", pathologie: "Molluscum contagiosum", page: "28", summary: "Lésions virales bénignes.", traitement: [{type: "local", nom: "Hydroxyde de potassium", poso: "1 app/jour"}], conseils: "Pas de piscine sans protection." },
    
    // --- ORL & OPHTALMOLOGIE ---
    { chapitre: "ORL", pathologie: "Otite moyenne aiguë", page: "193", summary: "Antibiothérapie ciblée.", traitement: [{type: "general", nom: "Amoxicilline", poso: "80-90mg/kg/j"}], conseils: "Paracétamol systématique." },
    { chapitre: "ORL", pathologie: "Rhinopharyngite", page: "68", summary: "Symptomatique.", traitement: [{type: "local", nom: "Lavage de nez", poso: "3 fois/jour"}], conseils: "Humidifier l'air." },
    { chapitre: "ORL", pathologie: "Otite externe", page: "74", summary: "Infection conduit externe.", traitement: [{type: "local", nom: "Gouttes (Ciprofloxacine)", poso: "3 gttes/2 fois/jour"}], conseils: "Protéger de l'eau." },

    // --- DIGESTIF & NUTRITION ---
    { chapitre: "Digestif", pathologie: "Gastro-entérite", page: "65", summary: "Réhydratation.", traitement: [{type: "general", nom: "SRO (Adiaril)", poso: "À volonté"}], conseils: "Ne pas arrêter l'allaitement." },
    { chapitre: "Digestif", pathologie: "Reflux (RGO)", page: "52", summary: "Gestion du nourrisson.", traitement: [{type: "general", nom: "Inexium", poso: "1mg/kg/j"}], conseils: "Position proclive." },
    { chapitre: "Digestif", pathologie: "Constipation", page: "58", summary: "Régulation transit.", traitement: [{type: "general", nom: "Macrogol", poso: "1-2 sachets/jour"}], conseils: "Augmenter fibres et eau." },

    // --- PNEUMOLOGIE ---
    { chapitre: "Pneumologie", pathologie: "Asthme (crise)", page: "241", summary: "Bronchodilatateur.", traitement: [{type: "local", nom: "Salbutamol", poso: "2 bouffées (chambre d'inhal.)"}], conseils: "Urgence si gêne respiratoire." },
    { chapitre: "Pneumologie", pathologie: "Bronchiolite", page: "32", summary: "Désencombrement.", traitement: [{type: "local", nom: "Sérum phys", poso: "Avant repas"}], conseils: "Fractionner repas." },
    { chapitre: "Pneumologie", pathologie: "Grippe", page: "38", summary: "Symptomatique.", traitement: [{type: "general", nom: "Paracétamol", poso: "15mg/kg/6h"}], conseils: "Hydratation abondante." },

    // --- INFECTIOLOGIE & NÉPHROLOGIE ---
    { chapitre: "Néphrologie", pathologie: "Infection urinaire", page: "82", summary: "Cystite aiguë.", traitement: [{type: "general", nom: "Céfixime", poso: "8mg/kg/j"}], conseils: "ECBU indispensable." },
    { chapitre: "Néphrologie", pathologie: "Phimosis", page: "88", summary: "Soin local.", traitement: [{type: "local", nom: "Dermocorticoïde", poso: "1 app/jour, 4-6 sem"}], conseils: "Pas de décalottage forcé." },
    { chapitre: "Infectiologie", pathologie: "Angine", page: "45", summary: "Streptococcique.", traitement: [{type: "general", nom: "Amoxicilline", poso: "50mg/kg/j"}], conseils: "TDR indispensable." }
];