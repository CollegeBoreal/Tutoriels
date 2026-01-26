# Proxmox

**schéma et l’explication de l’architecture de Proxmox VE**, pour que ce soit plus clair :

```mermaid
graph TD
    A[Matériel] --> B[Base Debian Linux]
    B --> C[KVM / QEMU]
    B --> D[LXC]
    B --> E[ZFS / Ceph / Stockage]
    B --> F[Couche de gestion Proxmox VE]
    F --> G[API REST & Outils de cluster]
    F --> H[Outils CLI \(pve-*\)]
    G --> I[Interface Web \(JavaScript / ExtJS\)]
    H --> J[Scripts Perl pour réseau, sauvegarde, HA]
    
    style C fill:#f9f,stroke:#333,stroke-width:1px
    style D fill:#f9f,stroke:#333,stroke-width:1px
    style E fill:#f9f,stroke:#333,stroke-width:1px
    style F fill:#ff9,stroke:#333,stroke-width:1px
    style G fill:#ff9,stroke:#333,stroke-width:1px
    style H fill:#ff9,stroke:#333,stroke-width:1px
    style I fill:#9ff,stroke:#333,stroke-width:1px
    style J fill:#ff9,stroke:#333,stroke-width:1px
```

### 🔹 Explications des couches :

1. **Matériel** – CPU, RAM, stockage, interfaces réseau.
2. **Base Debian Linux** – fondation stable pour tous les services Proxmox.
3. **KVM / QEMU (C/C++)** – moteur de virtualisation complète pour les machines virtuelles.
4. **LXC (C)** – moteur de conteneurs léger.
5. **ZFS / Ceph (C/C++)** – systèmes de stockage et de réplication.
6. **Couche de gestion Proxmox VE (Perl)** – cœur du système pour la gestion de cluster, la haute disponibilité (HA), les sauvegardes et l’intégration système.
7. **API REST & Outils de cluster (Perl)** – expose les points d’accès pour l’interface web, la CLI et les scripts.
8. **Outils CLI (Perl)** – commandes `pve-*` pour gérer VMs et conteneurs.
9. **Interface Web (JavaScript / ExtJS)** – frontend navigateur qui communique avec l’API REST.
10. **Scripts Perl** – gèrent les tâches système comme la configuration réseau, la planification des sauvegardes et la gestion des nœuds HA.

---

✅ **Point clé :**

* Perl est **le cerveau et le “colle”** de Proxmox.
* Le C/C++ s’occupe du **calcul lourd** (VMs, conteneurs, stockage).
* Le JavaScript gère **l’affichage côté navigateur**.

C’est cette combinaison qui rend Proxmox **léger et performant**, même si Perl est un langage ancien — il est parfait pour orchestrer et intégrer tous les composants du système.

---

Si tu veux, je peux aussi faire un **schéma expliquant pourquoi Proxmox fonctionne bien sur des petits matériels** comme un Intel N100 ou même un RPi5 (avec quelques ajustements). Veux‑tu que je fasse ça ?
