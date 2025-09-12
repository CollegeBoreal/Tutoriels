# :a: Alphabet

**Note on Terminology:** In many French IT environments, the English terms (like "pipe", "background", "tab completion", "shell") are very commonly used and often preferred over their French translations, especially in spoken, technical discussion. The translations provided here are the correct formal equivalents.

### 1. Special Shell Characters (Métacaractères)

Ces caractères sont interprétés par le `shell` lui-même pour exécuter des opérations spécifiques.

| Character | Name(s) (English -> French) | Primary Function & Example (English -> French) |
| :--- | :--- | :--- |
| `|` | **Pipe** (Barre verticale) | Envoie la sortie d'une commande comme entrée à la suivante. <br> `ls -l | grep ".txt"` |
| `>` | **Output Redirection** (Redirection de la sortie) | Redirige la sortie standard (stdout) vers un fichier, en l'écrasant. <br> `ls > liste_fichiers.txt` |
| `>>` | **Append Redirection** (Redirection avec ajout) | Redirige la sortie standard (stdout) vers un fichier, en lui ajoutant. <br> `echo "nouvelle ligne" >> fichier.txt` |
| `<` | **Input Redirection** (Redirection de l'entrée) | Lit l'entrée standard (stdin) à partir d'un fichier. <br> `sort < liste_non_triee.txt` |
| `2>` | **Error Redirection** (Redirection des erreurs) | Redirige l'erreur standard (stderr) vers un fichier. <br> `commande 2> journal_erreurs.txt` |
| `&>` | **Output & Error Redirection** (Redirection sortie et erreurs) | Redirige à la fois la sortie standard et l'erreur standard. <br> `commande &> journal.txt` |
| `$` | **Dollar Sign** (Dollar) | Utilisé pour l'expansion des variables. <br> `echo $HOME` |
| `*` | **Asterisk** (Astérisque) | Caractère générique pour correspondre à n'importe quelle séquence de caractères. <br> `rm *.bak` |
| `?` | **Question Mark** (Point d'interrogation) | Caractère générique pour correspondre à un seul caractère. <br> `ls fichier?.txt` |
| `[ ]` | **Square Brackets** (Crochets) | Caractère générique pour correspondre à un caractère unique dans un ensemble. <br> `ls fichier[123].txt` |
| `{ }` | **Curly Braces** (Accolades) | Expansion d'accolades. Génère des chaînes de caractères. <br> `mkdir /chemin/vers/{projets,images,docs}` |
| `~` | **Tilde** (Tilde) | Se développe en le répertoire personnel de l'utilisateur actuel. <br> `cd ~/Téléchargements` |
| `#` | **Hash / Pound** (Dièse) | Débute un commentaire. Tout ce qui suit est ignoré. <br> `# Ceci est un commentaire` |
| `;` | **Semicolon** (Point-virgule) | Sépareur de commandes. Exécute les commandes séquentiellement. <br> `cd /tmp; ls` |
| `&&` | **Double Ampersand** (Double esperluette) | ET logique. Exécute la seconde commande seulement si la première réussit. <br> `mkdir nouveau_rep && cd nouveau_rep` |
| `\|\|` | **Double Pipe** (Double barre verticale) | OU logique. Exécute la seconde commande seulement si la première échoue. <br> `cd /existe_peut_etre || echo "Répertoire non trouvé"` |
| `&` | **Ampersand** (Esperluette) | Exécute une commande en arrière-plan. <br> `commande_longue &` |
| `\` | **Backslash** (Antislash) | Caractère d'échappement. Supprime la signification spéciale du caractère suivant. <br> `echo "Le coût est de \$5"` |
| `' '` | **Single Quotes** (Guillemets simples) | Guillemets forts. Préserve la valeur littérale de chaque caractère à l'intérieur. <br> `echo '$USER'` # affiche `$USER` |
| `" "` | **Double Quotes** (Guillemets doubles) | Guillemets faibles. Préserve la valeur littérale de la plupart des caractères, mais permet l'expansion des variables (`$`), des commandes (``` ` ```) et de l'échappement (`\`). <br> `echo "Bonjour, $USER"` |
| `` ` `` | **Backtick** (Accent grave) | **Obsolète** pour la substitution de commande. Il vaut mieux utiliser `$()`. <br> `` ancienne_facon=`ls` `` |
| `$( )` | **Command Substitution** (Substitution de commande) | Exécute la commande à l'intérieur et la remplace par sa sortie. <br> `fichiers=$(ls)` |

---

### 2. Terminal Control Keys (Raccourcis)

Ces combinaisons de touches envoient des signaux de contrôle à l'émulateur de terminal ou au processus actif au premier plan.

| Key Combination | Name (English -> French) | Function (English -> French) |
| :--- | :--- | :--- |
| **Ctrl+C** | **Interrupt** (Interrompre) | Envoie SIGINT. Arrête (termine) le processus actuel au premier plan. |
| **Ctrl+Z** | **Suspend** (Suspendre) | Envoie SIGTSTP. Met en pause le processus actuel et le place en arrière-plan. |
| **Ctrl+D** | **EOF (End-of-File)** (Fin de fichier) | Termine la session shell actuelle (si utilisé sur une ligne vide) ou signale la fin de saisie à un programme. |
| **Ctrl+L** | **Clear Screen** (Effacer l'écran) | Efface l'écran du terminal (équivalent à la commande `clear`). |
| **Ctrl+A** |  | Déplace le curseur au **début** de la ligne. |
| **Ctrl+E** |  | Déplace le curseur à la **fin** de la ligne. |
| **Ctrl+U** |  | **Efface la ligne vers l'arrière**. Supprime tout du curseur au début de la ligne. |
| **Ctrl+K** |  | **Efface la ligne vers l'avant**. Supprime tout du curseur à la fin de la ligne. |
| **Ctrl+W** |  | **Efface le mot précédent**. Supprime le mot avant le curseur. |
| **Ctrl+R** | **Reverse Search** (Recherche inverse) | Ouvre une recherche inverse dans l'historique pour trouver une commande précédente. |
| **Ctrl+G** |  | Quitte le mode de recherche d'historique (depuis Ctrl+R). |
| **Tab** | **Tab Completion** (Complétion par tabulation) | Auto-complète les noms de fichiers, de commandes et d'options. Appuyez deux fois pour afficher les options. |
| **↑ / ↓** | **Arrow Keys** (Flèches) | Parcourt l'historique des commandes. |
| **Ctrl+Shift+C** | **Copy** (Copier) | (Dans la plupart des émulateurs de terminal) Copie le texte sélectionné. |
| **Ctrl+Shift+V** | **Paste** (Coller) | (Dans la plupart des émulateurs de terminal) Colle le texte du presse-papiers. |

---

### 3. Other Important Keys & Sequences (Autres touches et séquences importantes )

| Key | Function (English -> French) |
| :--- | :--- |
| **Enter / Return** (Entrée) | Exécute la commande actuelle. |
| **Space** (Espace) | Sépare les arguments. Utilisé également dans la complétion par tabulation. |
| **Esc** (Échap) | **Touche Méta**. Souvent utilisée comme préfixe pour des commandes alternatives (p.ex., dans `vim`). |
| **Alt+.** (or **Esc .**) | Insère le dernier argument de la commande précédente. |
| **Alt+B** / **Alt+F** | Déplace le curseur d'un mot vers l'arrière/l'avant. |
| **Delete / Backspace** (Suppr / Retour arrière) | Supprime les caractères. |

