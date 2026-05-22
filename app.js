// Moteur logique global avec base de données médicale intégrée
let appData = [
    {
        chapitre: "Dermatologie",
        pathologie: "Acné de l'adolescent",
        page: "1",
        summary: "Prise en charge locale et systémique de l'acné juvénile polymorphe.",
        traitement: [
            { type: "local", nom: "Peroxyde de benzoyle (Cutacnyl 2,5% ou 5%)", poso: "1 application le soir sur les zones acnéiques après nettoyage, en évitant les yeux et les muqueuses." },
            { type: "local", nom: "Rétinoïde local (Effederm crème ou Différine gel)", poso: "1 application le soir en alternance ou en seconde intention si rétentionnel prédominant." },
            { type: "general", nom: "Antibiotique oral (Doxycycline 100 mg / Granudoxy)", poso: "1 comprimé par jour au milieu du dîner pendant 3 mois. Attention à la photosensibilisation." }
        ],
        conseils: "Nettoyage doux avec un gel sans savon matin et soir. Ne pas percer les boutons. Utiliser une crème hydratante compensatrice non comédogène. Protection solaire indispensable en été."
    },
    {
        chapitre: "Dermatologie",
        pathologie: "Dermatite atopique",
        page: "5",
        summary: "Traitement des poussées d'eczéma et soins émollients de fond.",
        traitement: [
            { type: "local", nom: "Dermocorticoïde de classe II ou III (Flixovate crème ou Locoid crème)", poso: "1 application par jour sur les lésions inflammatoires (plaques rouges) uniquement, jusqu'à disparition complète de la rougeur (généralement 5 à 10 jours)." },
            { type: "local", nom: "Émollient de fond (Dexeryl, Lipikar Baume AP+, ou Atoderm)", poso: "2 applications par jour sur l'ensemble du corps, EN DEHORS des zones très inflammatoires." }
        ],
        conseils: "Bains tièdes courts (10 min maximum). Utiliser des syndets ou huiles de bain lavantes. Sécher par tapotements sans frotter. Vêtements en coton (éviter la laine et le synthétique). Maintenir la chambre à 18°C."
    },
    {
        chapitre: "Dermatologie",
        pathologie: "Éruptions fébriles",
        page: "9",
        summary: "Orientation clinique et gestion symptomatique de la fièvre éruptive infantile.",
        traitement: [
            { type: "general", nom: "Paracétamol (Doliprane, Efferalgan)", poso: "15 mg/kg toutes les 6 heures si la fièvre dépasse 38,5°C et que l'enfant est inconfortable (maximum 60 mg/kg/j)." }
        ],
        conseils: "Surveiller l'apparition de signes de gravité (purpura, somnolence, refus de boire, gêne respiratoire). Proposer à boire régulièrement. Ne pas trop couvrir l'enfant. CONTRE-INDICATION absolue des anti-inflammatoires (Ibuprofène) si suspicion de varicelle."
    },
    {
        chapitre: "Dermatologie",
        pathologie: "Érythème fessier du nourrisson",
        page: "13",
        summary: "Soin local des irritations du siège et traitement des surinfections.",
        traitement: [
            { type: "local", nom: "Pâte à l'eau protectrice (Aloplastine, Mytosil ou Eryplast)", poso: "Application en couche épaisse à chaque change après nettoyage doux." },
            { type: "local", nom: "Antifongique local (Econazole ou Cicalfate si surinfection)", poso: "2 applications par jour si érythème vif avec collerette squameuse (suspicion de candidose)." }
        ],
        conseils: "Changer le nourrisson très fréquemment (dès qu'il est mouillé). Nettoyage à l'eau tiède avec un savon doux ou liniment oléo-calcaire. Bien sécher les plis en tapotant. Laisser les fesses à l'air libre dès que possible."
    },
    {
        chapitre: "Dermatologie",
        pathologie: "Gale",
        page: "15",
        summary: "Éradication de Sarcoptes scabiei chez l'enfant et son entourage proche.",
        traitement: [
            { type: "general", nom: "Ivermectine par voie orale (Stromectol 3 mg)", poso: "Prise unique de 200 µg/kg au cours d'un repas. À renouveler impérativement à J14." },
            { type: "local", nom: "Perméthrine 5% crème (Topiscab)", poso: "Application sur tout le corps (y compris le cou et le cuir chevelu chez le nourrisson) pendant 8 à 12 heures, puis rincer. À renouveler à J8." }
        ],
        conseils: "Traiter SIMULTANÉMENT tous les membres du foyer, même sans symptômes. Laver le linge de lit, les vêtements et les doudous à 60°C. Traiter le linge non lavable avec un acaricide (Apar) en sac fermé pendant 72h."
    },
    {
        chapitre: "Digestif - Nutrition",
        pathologie: "Gastro-entérite aiguë et déshydratation",
        page: "65",
        summary: "Prévention de la déshydratation par solutés de réhydratation orale et antidiarrhéiques.",
        traitement: [
            { type: "general", nom: "Soluté de Réhydratation Orale - SRO (Adiaril, Fanolyte)", poso: "À proposer à volonté par petites quantités au début (5 à 10 ml toutes les 10 minutes), puis selon les pertes après chaque selle liquide ou vomissement." },
            { type: "general", nom: "Racécadotril (Tiorfan nourrisson / enfant)", poso: "1 sachet 3 fois par jour à diluer dans le SRO ou l'alimentation, à poursuivre jusqu'au retour des selles normales." }
        ],
        conseils: "Surveiller le poids de l'enfant (peser à poil), le nombre de selles/vomissements, le comportement (apathie) et la diurèse. Ne jamais arrêter l'allaitement maternel. Reprendre le lait habituel rapidement (ou lait sans lactose si diarrhée sévère > 4 mois)."
    },
    {
        chapitre: "ORL - Ophtalmologie",
        pathologie: "Otites aiguës",
        page: "193",
        summary: "Antibiothérapie ciblée et antalgie de l'otite moyenne aiguë congestive ou purulente.",
        traitement: [
            { type: "general", nom: "Amoxicilline (Clamoxyl)", poso: "80 à 90 mg/kg/jour répartis en 2 ou 3 prises quotidiennes pendant 8 à 10 jours chez le nourrisson de moins de 2 ans (5 jours si > 2 ans et otite bilatérale)." },
            { type: "general", nom: "Paracétamol suspension buvable", poso: "15 mg/kg toutes les 6 heures de façon systématique les premières 48 heures pour gérer la douleur intense." }
        ],
        conseils: "Consulter à nouveau si la fièvre ou la douleur persistent après 48 heures d'antibiotiques (suspicion de résistance ou de complication). Interdiction absolue d'instiller des gouttes auriculaires sans certitude sur l'intégrité du tympan."
    },
    {
        chapitre: "Pneumologie - Allergologie",
        pathologie: "Asthme et exacerbation aiguë",
        page: "241",
        summary: "Traitement de crise par bronchodilatateurs et corticothérapie systémique courte.",
        traitement: [
            { type: "local", nom: "Salbutamol (Ventoline 100 µg via chambre d'inhalation)", poso: "2 à 4 bouffées toutes les 20 à 30 minutes la première heure en cas de crise, à renouveler selon l'état clinique." },
            { type: "general", nom: "Prednisolone orale (Solupred 20 mg)", poso: "1 à 2 mg/kg/jour en 1 prise le matin pendant 3 à 5 jours pour stopper l'inflammation des voies aériennes." }
        ],
        conseils: "Toujours administrer les sprays à travers une chambre d'inhalation munie d'un masque adapté à l'âge de l'enfant. Si l'enfant lutte pour respirer, tire ou si ses lèvres bleuissent : appeler immédiatement le SAMU (15)."
    }
];

let activeCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
    generateFilterTags();
    renderCards();
    setupEvents();
    
    // Register Service Worker for true PWA support
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('SW Registered with scope:', reg.scope))
            .catch(err => console.error('SW Registration failed:', err));
    }
});

function generateFilterTags() {
    const tagsContainer = document.getElementById('filter-tags');
    const categories = ['all', ...new Set(appData.map(item => item.chapitre))];
    
    tagsContainer.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `tag ${cat === activeCategory ? 'active' : ''}`;
        btn.textContent = cat === 'all' ? 'Tout' : cat;
        btn.dataset.category = cat;
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = cat;
            renderCards();
        });
        tagsContainer.appendChild(btn);
    });
}

function renderCards() {
    const grid = document.getElementById('cards-grid');
    const loading = document.getElementById('loading');
    const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
    
    const filtered = appData.filter(item => {
        const matchesCategory = (activeCategory === 'all' || item.chapitre === activeCategory);
        const matchesSearch = item.pathologie.toLowerCase().includes(searchTerm) || 
                              item.chapitre.toLowerCase().includes(searchTerm) ||
                              item.summary.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });
    
    if (loading) loading.style.display = 'none';
    grid.innerHTML = '';
    
    if (filtered.length === 0) {
        grid.innerHTML = '<div style="text-align:center; color:var(--text-muted); padding:30px; width:100%;">Aucun protocole trouvé pour cette recherche</div>';
        return;
    }
    
    filtered.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.addEventListener('click', () => openModal(item));
        card.innerHTML = `
            <div class="card-category">${item.chapitre}</div>
            <div class="card-title">${item.pathologie}</div>
            <div class="card-preview-text">${item.summary}</div>
            <div class="card-meta">
                <span>Cliquez pour voir l'ordonnance</span>
                <span class="page-badge">Réf. p. ${item.page}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

function openModal(item) {
    const modal = document.getElementById('details-modal');
    const body = document.getElementById('modal-body-content');
    
    let treatmentHTML = '';
    item.traitement.forEach(t => {
        const typeBadge = t.type === 'local' ? '🛑 LOCAL' : '💊 VOIE GÉNÉRALE';
        treatmentHTML += `
            <div class="medication-block">
                <div class="med-name"><span style="font-size:0.8rem; color:var(--accent); font-weight:700;">${typeBadge}</span><br>${t.nom}</div>
                <div class="med-details"><strong>Posologie & Durée :</strong> ${t.poso}</div>
            </div>
        `;
    });
    
    body.innerHTML = `
        <div class="prescription-header">
            <span style="font-size: 0.8rem; text-transform:uppercase; font-weight:700; color:var(--accent);">${item.chapitre}</span>
            <h2>${item.pathologie}</h2>
            <p style="color:var(--text-muted); font-size:0.9rem; margin-top:5px;"><em>${item.summary}</em></p>
        </div>
        
        <div class="section-title">Prescription Médicale</div>
        ${treatmentHTML}
        
        <div class="section-title">Conseils & Règles Hygiéno-Diététiques</div>
        <div class="info-note">${item.conseils}</div>
        
        <div style="font-size:0.75rem; color:var(--text-muted); text-align:right; margin-top:20px; border-top:1px solid #e2e8f0; padding-top:10px;">
            Source officielle : Guide Ordonnances en Pédiatrie, Page ${item.page}
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Lock background scroll
}

function setupEvents() {
    document.getElementById('search-input').addEventListener('input', renderCards);
    
    const modal = document.getElementById('details-modal');
    const closeBtn = document.querySelector('.close-button');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}