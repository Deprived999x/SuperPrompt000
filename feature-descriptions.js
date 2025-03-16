/**
 * Feature Descriptions
 * Contains detailed descriptions for all facial features
 */

const featureDescriptions = {
    // Face Shape descriptions
    Face_Shape: {
        oval: {
            primaryDescription: "A balanced, symmetrical shape slightly longer than it is wide.",
            visualCharacteristics: [
                "Gently curved jawline",
                "Forehead slightly wider than chin",
                "Smooth transition between features",
                "Well-proportioned facial thirds"
            ],
            distinguishingAttributes: [
                "Often considered the \"ideal\" face shape",
                "Naturally harmonious with most feature combinations",
                "Creates a balanced canvas for other features"
            ],
            commonVariations: [
                "Subtle inverted triangle",
                "Pronounced inverted triangle",
                "With varying degrees of width difference"
            ],
            ethnicExample: "Found across various ethnic backgrounds"
        },
        long: {
            primaryDescription: "Elongated shape that is distinctly taller than it is wide.",
            visualCharacteristics: [
                "Extended vertical dimension",
                "Narrower width proportion",
                "Oval-like but more stretched",
                "Greater height-to-width ratio"
            ],
            distinguishingAttributes: [
                "Creates an impression of height and length",
                "Often complements long facial features",
                "Provides elongated frame for face"
            ],
            commonVariations: [
                "Moderately long",
                "Very long",
                "With varying width"
            ],
            ethnicExample: "Often seen in Northern European features"
        },
        baseball: {
            primaryDescription: "Round and fuller head shape, resembling the shape of a baseball.",
            visualCharacteristics: [
                "Even roundness in all directions",
                "Fuller appearance overall",
                "Minimal flattening",
                "Symmetrical curvature"
            ],
            distinguishingAttributes: [
                "Creates a balanced, substantial appearance",
                "Often complements rounded facial features",
                "Provides smooth cranial outline"
            ],
            commonVariations: [
                "Perfectly round baseball",
                "Slightly elongated baseball",
                "With subtle flattening in areas"
            ],
            ethnicExample: "Found across multiple ethnic backgrounds"
        }
    }
};Variations: [
                "Slightly elongated oval",
                "Slightly wider oval",
                "High or low forehead variations"
            ],
            ethnicExample: "Common in many European populations"
        },
        round: {
            primaryDescription: "A soft, circular shape with similar width and height measurements.",
            visualCharacteristics: [
                "Full, curved cheeks",
                "Shortened face length",
                "Soft jawline without angular definition",
                "Rounded chin area"
            ],
            distinguishingAttributes: [
                "Creates a youthful appearance",
                "Naturally softens other facial features",
                "Provides fuller appearance in the mid-face"
            ],
            commonVariations: [
                "Slightly oblong round",
                "Fullness concentrated in lower face",
                "Fullness concentrated in mid-face"
            ],
            ethnicExample: "Prevalent in some Asian and African populations"
        },
        square: {
            primaryDescription: "A strong, angular jawline with roughly equal width and height dimensions.",
            visualCharacteristics: [
                "Defined, angular jawline",
                "Prominent jaw corners",
                "Broader forehead with minimal tapering",
                "Strong horizontal lines"
            ],
            distinguishingAttributes: [
                "Projects strength and definition",
                "Creates distinctive shadow patterns",
                "Provides strong structural framework"
            ],
            commonVariations: [
                "Slightly rectangular square",
                "Softened corners",
                "Prominent or subtle jaw corners"
            ],
            ethnicExample: "Common in Northern European and Native American populations"
        },
        heart: {
            primaryDescription: "A wider forehead that gradually narrows to a delicate, pointed chin.",
            visualCharacteristics: [
                "Broad forehead and temple area",
                "Narrowing through cheeks",
                "Defined, often pointed chin",
                "High cheekbones"
            ],
            distinguishingAttributes: [
                "Creates an inverted triangular impression",
                "Emphasizes the upper face and eyes",
                "Provides natural cheekbone highlight"
            ],
            commonVariations: [
                "Softened heart shape",
                "More or less pointed chin",
                "Varying degrees of forehead width"
            ],
            ethnicExample: "Found in various populations"
        },
        diamond: {
            primaryDescription: "Narrow forehead and jawline with the face's widest points at the cheekbones.",
            visualCharacteristics: [
                "Prominent, high cheekbones",
                "Narrow forehead",
                "Narrow, often pointed chin",
                "Angular transitions between facial planes"
            ],
            distinguishingAttributes: [
                "Dramatic facial structure with distinctive angles",
                "Naturally emphasizes the mid-face region",
                "Creates striking profile silhouette"
            ],
            commonVariations: [
                "Softer diamond with rounded cheekbones",
                "More angular with sharp transitions",
                "Varying cheekbone width-to-height ratios"
            ],
            ethnicExample: "Seen in some European and Asian populations"
        },
        rectangular: {
            primaryDescription: "Longer face with strong, relatively parallel sides from forehead to jaw.",
            visualCharacteristics: [
                "Extended vertical dimensions",
                "Minimal tapering from forehead to jaw",
                "Angular jawline",
                "Prominent facial planes"
            ],
            distinguishingAttributes: [
                "Elongated appearance with strong structure",
                "Well-defined facial thirds",
                "Creates a mature, distinguished look"
            ],
            commonVariations: [
                "Slightly tapered rectangle",
                "Varying length-to-width ratios",
                "Softened or angular jaw corners"
            ],
            ethnicExample: "Found in some Middle Eastern populations"
        },
        "triangle": {
            primaryDescription: "Broader forehead narrowing to a pointed chin.",
            visualCharacteristics: [
                "Wide upper face",
                "Gradual narrowing to chin",
                "Defined temples",
                "Tapered jawline"
            ],
            distinguishingAttributes: [
                "Similar to heart shape with more gradual tapering",
                "Emphasizes the eyes and upper face",
                "Creates a gentle transition to the chin"
            ],
            commonVariations: [
                "Sharp or soft chin point",
                "Varying degrees of forehead width",
                "Different tapering angles"
            ],
            ethnicExample: "Seen in various ethnic backgrounds"
        },
        "inverted_triangle": {
            primaryDescription: "Narrow forehead widening to a broader jawline.",
            visualCharacteristics: [
                "Narrow upper face",
                "Wider lower face",
                "Broader jaw than forehead",
                "Strong jaw angles"
            ],
            distinguishingAttributes: [
                "Creates a stable, grounded appearance",
                "Emphasizes the jaw and lower face",
                "Distinctive silhouette in profile"
            ],
            commonVariations: [
                "Subtle to pronounced width difference",
                "Angular or rounded jaw",
                "Varying degrees of forehead narrowness"
            ],
            ethnicExample: "Found in some European populations"
        },
        "long": {
            primaryDescription: "Elongated shape that is distinctly longer than it is wide.",
            visualCharacteristics: [
                "Extended face length",
                "Narrow width throughout",
                "Long chin and forehead",
                "Balanced facial features"
            ],
            distinguishingAttributes: [
                "Creates an impression of height",
                "Naturally slenderizes the face",
                "Provides extended canvas for feature placement"
            ],
            commonVariations: [
                "Slightly oval oblong",
                "Varying degrees of narrowness",
                "Different length-to-width proportions"
            ],
            ethnicExample: "Often seen in Northern European features"
        },
        "baseball": {
            primaryDescription: "Round and fuller face, resembling the shape of a baseball.",
            visualCharacteristics: [
                "Similar measurements in all directions",
                "Full cheeks",
                "Rounded jawline",
                "Minimal definition at corners"
            ],
            distinguishingAttributes: [
                "Creates a youthful, cherubic appearance",
                "Softens angular features",
                "Provides consistently curved outline"
            ],
            commonVariations: [
                "Slightly elongated baseball",
                "Higher or lower fullness concentration",
                "With more or less defined jawline"
            ],
            ethnicExample: "Found across multiple ethnic backgrounds"
        }
    },

    // Eyes descriptions
    Eyes: {
        almond: {
            primaryDescription: "Elongated oval shape, slightly upturned at the edges.",
            visualCharacteristics: [
                "Gentle taper at both corners",
                "Visible lid crease",
                "Balanced proportions",
                "Subtle lift at outer corner"
            ],
            distinguishingAttributes: [
                "Often associated with East Asian and Mediterranean populations",
                "Creates an elegant, harmonious appearance",
                "Naturally enhances expressiveness"
            ],
            commonVariations: [
                "Wide almond",
                "Narrow almond",
                "Symmetrical or asymmetrical"
            ],
            ethnicExample: "Common in East Asian and Mediterranean populations"
        },
        round: {
            primaryDescription: "Circular shape with a full, open appearance.",
            visualCharacteristics: [
                "Clearly visible iris with white showing all around",
                "Prominent lid crease",
                "Minimal taper at corners",
                "Often appear larger"
            ],
            distinguishingAttributes: [
                "Creates a youthful, alert expression",
                "Often found in Northern European and Slavic populations",
                "Enhances perceived expressiveness and emotion"
            ],
            commonVariations: [
                "Very round",
                "Slightly oval round",
                "Deep-set round"
            ],
            ethnicExample: "Frequently seen in Northern European and Slavic populations"
        },
        hooded: {
            primaryDescription: "Upper eyelid partially covers the eyelid crease.",
            visualCharacteristics: [
                "Minimal or partially hidden lid crease",
                "Upper lid appears to drape over crease",
                "May create shadow on upper lid",
                "Can make eyes appear smaller"
            ],
            distinguishingAttributes: [
                "Common in East Asian and some Northern European populations",
                "Often increases with age in many ethnicities",
                "Creates distinctive gaze character"
            ],
            commonVariations: [
                "Slightly hooded",
                "Fully hooded",
                "Asymmetrically hooded"
            ],
            ethnicExample: "Prevalent in East Asian and some Northern European populations"
        },
        monolid: {
            primaryDescription: "Minimal or no visible eyelid crease.",
            visualCharacteristics: [
                "Smooth upper eyelid without visible crease",
                "Often with flatter eye profile",
                "Continuous curve from browbone to lash line",
                "Clean, uninterrupted lid surface"
            ],
            distinguishingAttributes: [
                "Predominantly found in East Asian populations",
                "Creates a distinctive, elegant eye appearance",
                "Smooth transition from brow to eye"
            ],
            commonVariations: [
                "Partial monolid",
                "Full monolid",
                "With slight natural crease"
            ],
            ethnicExample: "Predominantly found in East Asian populations"
        },
        "cat_eyes": {
            primaryDescription: "Similar to almond shape but with a more pronounced outer point.",
            visualCharacteristics: [
                "Distinctly upturned outer corners",
                "Often narrow appearance",
                "Pronounced angling",
                "Distinctive lift at outer edges"
            ],
            distinguishingAttributes: [
                "Creates a feline-like, distinctive appearance",
                "Often provides an exotic or dramatic look",
                "Naturally emphasizes cheekbones"
            ],
            commonVariations: [
                "Subtly cat-like",
                "Dramatically upturned",
                "With varying degrees of narrowness"
            ],
            ethnicExample: "Seen across various ethnic backgrounds"
        },
        slanted: {
            primaryDescription: "Angular shape with a more dramatic tilt.",
            visualCharacteristics: [
                "Clear diagonal axis from inner to outer corner",
                "Often with visible angle change",
                "Distinctive slope",
                "Typically with visible outer white of eye"
            ],
            distinguishingAttributes: [
                "Creates a distinctive, angular appearance",
                "Often appears more exotic",
                "Adds structural interest to the face"
            ],
            commonVariations: [
                "Slightly slanted",
                "Very slanted",
                "Combined with other eye shapes"
            ],
            ethnicExample: "Common in various Asian populations"
        },
        "wide-set": {
            primaryDescription: "Eyes that are farther apart than average.",
            visualCharacteristics: [
                "Greater distance between inner corners",
                "More visible bridge of nose",
                "Often with broader nose bridge",
                "Creates more space in mid-face"
            ],
            distinguishingAttributes: [
                "Provides an open, expansive facial appearance",
                "Often creates unique facial harmony",
                "Can make nose appear narrower by contrast"
            ],
            commonVariations: [
                "Moderately wide-set",
                "Extremely wide-set",
                "Combined with various eye shapes"
            ],
            ethnicExample: "Found across multiple ethnic backgrounds"
        },
        "close-set": {
            primaryDescription: "Eyes that are closer together than average.",
            visualCharacteristics: [
                "Reduced distance between inner corners",
                "Less visible nose bridge",
                "Often appears more focused",
                "Can create perception of stronger gaze"
            ],
            distinguishingAttributes: [
                "Creates an intense, focused facial appearance",
                "Often emphasizes the eyes as a feature",
                "Can make the nose appear wider by contrast"
            ],
            commonVariations: [
                "Slightly close-set",
                "Very close-set",
                "Combined with various eye shapes"
            ],
            ethnicExample: "Found across multiple ethnic backgrounds"
        }
    },
    eyeModifiers: {
        upturned: {
            primaryDescription: "Outer corners of the eyes angle slightly upward compared to inner corners.",
            visualCharacteristics: [
                "Higher outer corner than inner corner",
                "Creates slight diagonal axis to eye shape",
                "Often associated with \"cat-like\" appearance",
                "Enhances cheekbone appearance"
            ],
            distinguishingAttributes: [
                "Often seen in some East Asian and Mediterranean features",
                "Creates a naturally lifted appearance",
                "Influences perceived facial expression"
            ],
            commonVariations: [
                "Slightly upturned",
                "Dramatically upturned",
                "Combined with various eye shapes"
            ],
            ethnicExample: "Often seen in some East Asian and Mediterranean features"
        },
        downturned: {
            primaryDescription: "Outer corners of the eyes angle slightly downward compared to inner corners.",
            visualCharacteristics: [
                "Lower outer corner than inner corner",
                "Creates downward diagonal axis to eye shape",
                "Can create appearance of drooping",
                "Often softens expression"
            ],
            distinguishingAttributes: [
                "Frequently observed in Southern European and African populations",
                "Can create a gentle, approachable expression",
                "Sometimes increases with age"
            ],
            commonVariations: [
                "Slightly downturned",
                "Dramatically downturned",
                "Age-related downturning"
            ],
            ethnicExample: "Frequently observed in Southern European and African populations"
        }
    },

    // Nose descriptions
    Nose: {
        straight: {
            primaryDescription: "Smooth, even profile with no significant curves or bumps.",
            visualCharacteristics: [
                "Linear bridge with minimal deviation",
                "Even transition from bridge to tip",
                "Moderate projection from face",
                "Balanced proportions"
            ],
            distinguishingAttributes: [
                "Common in Northern European populations",
                "Creates a classically balanced profile",
                "Provides strong central facial axis"
            ],
            commonVariations: [
                "Short straight",
                "Long straight",
                "Varying bridge height"
            ],
            ethnicExample: "Common in Northern European populations"
        },
        curved: {
            primaryDescription: "Bridge that has a noticeable arch or curve.",
            visualCharacteristics: [
                "Visible arch along bridge",
                "Smooth, continuous curved profile",
                "Often with more height at mid-bridge",
                "Rounded silhouette from side view"
            ],
            distinguishingAttributes: [
                "Creates a distinctive profile silhouette",
                "Can add character and interest",
                "Provides natural shadow patterns"
            ],
            commonVariations: [
                "Subtle curve",
                "Pronounced curve",
                "With various tip shapes"
            ],
            ethnicExample: "Found in various populations"
        },
        aquiline: {
            primaryDescription: "Prominent, slightly curved bridge with a downward hook at the tip.",
            visualCharacteristics: [
                "Pronounced convex curve",
                "Distinctive hook or downward curve at tip",
                "Strong bridge prominence",
                "Often longer in length"
            ],
            distinguishingAttributes: [
                "Frequently seen in Middle Eastern and Mediterranean populations",
                "Creates a strong, distinctive profile",
                "Often associated with nobility in historical contexts"
            ],
            commonVariations: [
                "Subtle aquiline curve",
                "Pronounced aquiline curve",
                "Varying tip angle"
            ],
            ethnicExample: "Frequently seen in Middle Eastern and Mediterranean populations"
        },
        flat: {
            primaryDescription: "Low bridge with minimal projection from the face.",
            visualCharacteristics: [
                "Minimal bridge protrusion",
                "Reduced height from face to bridge",
                "Often appears wider",
                "Less defined bridge-to-tip transition"
            ],
            distinguishingAttributes: [
                "Common in many East Asian populations",
                "Creates a smooth facial plane",
                "Often accompanied by wider nostrils"
            ],
            commonVariations: [
                "Very flat",
                "Partially flat bridge",
                "With various tip shapes"
            ],
            ethnicExample: "Common in many East Asian populations"
        },
        nubian: {
            primaryDescription: "Wider base with a flatter bridge and sometimes rounded tip.",
            visualCharacteristics: [
                "Wide nostrils",
                "Low bridge height",
                "Fuller tip",
                "More horizontal alignment from bridge to tip"
            ],
            distinguishingAttributes: [
                "Common in African and African-American populations",
                "Creates balanced central facial feature",
                "Often has distinctive flaring nostrils"
            ],
            commonVariations: [
                "Wide nubian",
                "Narrow nubian",
                "With varying bridge heights"
            ],
            ethnicExample: "Common in African and African-American populations"
        },
        roman: {
            primaryDescription: "Long, slightly convex profile with a prominent bridge.",
            visualCharacteristics: [
                "Pronounced bridge with gentle outward curve",
                "Strong projection from face",
                "Well-defined tip that may angle downward",
                "Longer overall appearance"
            ],
            distinguishingAttributes: [
                "Common in Southern European and North African populations",
                "Creates a strong, distinctive profile",
                "Adds character and strength to facial appearance"
            ],
            commonVariations: [
                "Subtle Roman curve",
                "Prominent Roman curve",
                "Varying tip definition"
            ],
            ethnicExample: "Common in Southern European and North African populations"
        },
        button: {
            primaryDescription: "Small, slightly upturned nose with a rounded tip.",
            visualCharacteristics: [
                "Compact overall size",
                "Rounded tip that may angle upward",
                "Short bridge",
                "Often with visible nostrils from front view"
            ],
            distinguishingAttributes: [
                "Often found in East Asian and some European populations",
                "Creates a youthful, delicate appearance",
                "Complements wider-set eyes"
            ],
            commonVariations: [
                "Very small button",
                "Slightly upturned button",
                "Rounded or more defined button"
            ],
            ethnicExample: "Often found in East Asian and some European populations"
        },
        wide: {
            primaryDescription: "Broad at the bridge and tip, giving a fuller appearance.",
            visualCharacteristics: [
                "Greater horizontal span across bridge",
                "Wider nostril placement",
                "Fuller appearance from front view",
                "Often takes up more facial space"
            ],
            distinguishingAttributes: [
                "Common in various ethnic backgrounds",
                "Creates a strong central facial presence",
                "Often provides balanced proportions in wider faces"
            ],
            commonVariations: [
                "Wide throughout",
                "Wide at nostrils only",
                "Wide with flat or high bridge"
            ],
            ethnicExample: "Common in African and some Native American populations"
        },
        pointed: {
            primaryDescription: "Sharp and defined tip that narrows at the end.",
            visualCharacteristics: [
                "Narrower, more defined tip",
                "Often with more structured cartilage",
                "Sharp definition at end",
                "Can have various bridge shapes"
            ],
            distinguishingAttributes: [
                "Creates a defined, refined appearance",
                "Often appears more delicate",
                "Provides clear light reflection point"
            ],
            commonVariations: [
                "Very pointed",
                "Slightly pointed",
                "With varying bridge shapes"
            ],
            ethnicExample: "Common in various European populations"
        },
        snub: {
            primaryDescription: "Short, small nose with a slightly upturned tip.",
            visualCharacteristics: [
                "Compact overall size",
                "Tip with slight upward angle",
                "Often with little bridge definition",
                "Minimal projection from face"
            ],
            distinguishingAttributes: [
                "Prevalent in some Asian and Eastern European populations",
                "Creates a youthful, approachable appearance",
                "Often appears subtly flattened"
            ],
            commonVariations: [
                "Very small snub",
                "Wide or narrow snub",
                "Varying degrees of upturn"
            ],
            ethnicExample: "Prevalent in some Asian and Eastern European populations"
        }
    },
    noseWidth: {
        wide: {
            primaryDescription: "Broader nose bridge and nostril width.",
            visualCharacteristics: [
                "Greater horizontal span across bridge",
                "Wider nostril placement",
                "Fuller appearance from front view",
                "Often with more rounded nostrils"
            ],
            distinguishingAttributes: [
                "Common in African and some Native American populations",
                "Creates a strong central facial presence",
                "Often provides balanced proportions in wider faces"
            ],
            commonVariations: [
                "Wide bridge with narrower nostrils",
                "Wide nostrils with narrower bridge",
                "Uniform width throughout"
            ],
            ethnicExample: "Common in African and some Native American populations"
        },
        narrow: {
            primaryDescription: "Slim, more delicate nose bridge and nostril width.",
            visualCharacteristics: [
                "Reduced horizontal span",
                "Closer-set nostrils",
                "Thinner bridge",
                "Often with more defined contours"
            ],
            distinguishingAttributes: [
                "Often seen in East Asian and Northern European populations",
                "Creates a delicate, refined appearance",
                "Can emphasize other facial features by contrast"
            ],
            commonVariations: [
                "Very narrow throughout",
                "Narrow bridge with wider nostrils",
                "Narrow with defined or soft contours"
            ],
            ethnicExample: "Often seen in East Asian and Northern European populations"
        }
    },

    // Lips descriptions
    Lips: {
        full: {
            primaryDescription: "Naturally plump and well-defined lips with substantial volume.",
            visualCharacteristics: [
                "Significant vertical height",
                "Pronounced volume throughout",
                "Defined borders",
                "Prominent cupid's bow"
            ],
            distinguishingAttributes: [
                "Common in African and some Mediterranean populations",
                "Creates a youthful, expressive appearance",
                "Often forms a focal point of the face"
            ],
            commonVariations: [
                "Uniformly full",
                "Full with defined or soft borders",
                "Full with varying cupid's bow definition"
            ],
            ethnicExample: "Common in African and some Mediterranean populations"
        },
        thin: {
            primaryDescription: "Narrow, less prominent lip volume.",
            visualCharacteristics: [
                "Reduced vertical height",
                "Minimal protrusion",
                "Often with less defined borders",
                "Can appear straight from side view"
            ],
            distinguishingAttributes: [
                "Frequently seen in Northern European populations",
                "Creates a reserved, subtle appearance",
                "Often emphasizes other facial features"
            ],
            commonVariations: [
                "Very thin",
                "Moderately thin",
                "Thin with defined or subtle borders"
            ],
            ethnicExample: "Frequently seen in Northern European populations"
        },
        wide: {
            primaryDescription: "Broader lip width relative to face.",
            visualCharacteristics: [
                "Extended horizontal span",
                "Takes up larger portion of lower face",
                "Corner-to-corner length is pronounced",
                "May appear flatter when relaxed"
            ],
            distinguishingAttributes: [
                "Common in African and some Native American populations",
                "Creates a naturally expressive appearance",
                "Provides balance in wider faces"
            ],
            commonVariations: [
                "Wide and full",
                "Wide and thin",
                "Varying degrees of width"
            ],
            ethnicExample: "Common in African and some Native American populations"
        },
        small: {
            primaryDescription: "Delicate, smaller lip width and height.",
            visualCharacteristics: [
                "Reduced overall dimensions",
                "Takes up smaller portion of lower face",
                "Compact corner-to-corner measurement",
                "Often appears more concentrated"
            ],
            distinguishingAttributes: [
                "Often found in East Asian populations",
                "Creates a delicate, precise appearance",
                "Can emphasize the eyes and upper face"
            ],
            commonVariations: [
                "Very small",
                "Moderately small",
                "Small with varying fullness"
            ],
            ethnicExample: "Often found in East Asian populations"
        },
        "heart-shaped": {
            primaryDescription: "Pronounced cupid's bow with defined upper lip curve.",
            visualCharacteristics: [
                "Distinctive M-shape in upper lip",
                "Well-defined peaks",
                "Often with fuller center",
                "Creates distinctive outline"
            ],
            distinguishingAttributes: [
                "Prevalent in some European and Asian populations",
                "Creates a romantic, expressive appearance",
                "Often draws attention to the mouth area"
            ],
            commonVariations: [
                "Subtle heart shape",
                "Pronounced heart shape",
                "Varying lower lip fullness"
            ],
            ethnicExample: "Prevalent in some European and Asian populations"
        },
        neutral: {
            primaryDescription: "Balanced lips without distinctive fullness or thinness.",
            visualCharacteristics: [
                "Moderate vertical height",
                "Even proportion to face",
                "Neither prominent nor recessive",
                "Natural, unexaggerated appearance"
            ],
            distinguishingAttributes: [
                "Found across many populations",
                "Creates a balanced, harmonious appearance",
                "Complements other facial features without dominating"
            ],
            commonVariations: [
                "Slightly fuller neutral",
                "Slightly thinner neutral",
                "With varying definition"
            ],
            ethnicExample: "Common across multiple ethnic backgrounds"
        },
        pouty: {
            primaryDescription: "Lips that appear slightly protruding, creating a subtle forward projection.",
            visualCharacteristics: [
                "Forward projection from face",
                "Often with rolled outer edge",
                "Can create shadow beneath lower lip",
                "Dimensional appearance in profile"
            ],
            distinguishingAttributes: [
                "Creates a sensual, expressive appearance",
                "Often associated with youthfulness",
                "Provides dimensional interest to the face"
            ],
            commonVariations: [
                "Slightly pouty",
                "Very pouty",
                "With varying fullness"
            ],
            ethnicExample: "Found across various ethnic backgrounds"
        }
    },
    lipFullness: {
        upper_prominent: {
            primaryDescription: "More volume in the upper lip compared to the lower lip.",
            visualCharacteristics: [
                "Fuller, more projected upper lip",
                "Upper lip may equal or exceed lower",
                "Distinctive cupid's bow often present",
                "Creates balance inversion from norm"
            ],
            distinguishingAttributes: [
                "Often seen in some African and Native American features",
                "Creates a distinctive, unique appearance",
                "Provides strong character to lower face"
            ],
            commonVariations: [
                "Slightly prominent upper",
                "Significantly prominent upper",
                "With defined or soft cupid's bow"
            ],
            ethnicExample: "Often seen in some African and Native American features"
        },
        lower_prominent: {
            primaryDescription: "More volume in the lower lip compared to the upper lip.",
            visualCharacteristics: [
                "Fuller, more projected lower lip",
                "Thinner upper lip by comparison",
                "Often creates pouty appearance",
                "More common proportion pattern"
            ],
            distinguishingAttributes: [
                "Common in some Middle Eastern and Mediterranean populations",
                "Creates a sensual, expressive appearance",
                "Classical proportion in many facial types"
            ],
            commonVariations: [
                "Subtly prominent lower",
                "Dramatically prominent lower",
                "With varying upper lip definition"
            ],
            ethnicExample: "Common in some Middle Eastern and Mediterranean populations"
        },
        balanced: {
            primaryDescription: "Equal volume between upper and lower lips.",
            visualCharacteristics: [
                "Even distribution of fullness",
                "Similar projection of both lips",
                "Harmonious proportions",
                "Neither lip dominates"
            ],
            distinguishingAttributes: [
                "Widespread across various populations",
                "Creates a balanced, harmonious appearance",
                "Provides versatile expressiveness"
            ],
            commonVariations: [
                "Balanced full lips",
                "Balanced thin lips",
                "With varying cupid's bow definition"
            ],
            ethnicExample: "Widespread across various populations"
        }
    },
    lipModifiers: {
        downturned: {
            primaryDescription: "Lips that angle slightly downward at the corners.",
            visualCharacteristics: [
                "Corners angle downward",
                "Can create appearance of resting frown",
                "Often more pronounced at rest",
                "Creates distinctive mouth silhouette"
            ],
            distinguishingAttributes: [
                "Can add character and maturity to appearance",
                "Sometimes increases with age",
                "Creates distinctive resting expression"
            ],
            commonVariations: [
                "Slightly downturned",
                "Pronouncedly downturned",
                "Age-related downturning"
            ],
            ethnicExample: "Found across various populations"
        },
        upturned: {
            primaryDescription: "Lips that angle slightly upward at the corners.",
            visualCharacteristics: [
                "Corners lift upward",
                "Can create appearance of slight smile at rest",
                "Often creates a friendly resting expression",
                "More visible with neutral expression"
            ],
            distinguishingAttributes: [
                "Creates an approachable, positive appearance",
                "Often associated with youthfulness",
                "Enhances expressiveness"
            ],
            commonVariations: [
                "Slightly upturned",
                "Pronouncedly upturned",
                "With varying lip fullness"
            ],
            ethnicExample: "Found across various populations"
        },
        wide_and_thin: {
            primaryDescription: "Lips that extend horizontally while maintaining minimal vertical thickness.",
            visualCharacteristics: [
                "Extended horizontal span",
                "Reduced vertical height",
                "Often creates a linear appearance",
                "Balanced proportion to face width"
            ],
            distinguishingAttributes: [
                "Creates a distinctive mouth shape",
                "Often provides balanced proportions in wider faces",
                "Can add character to the face"
            ],
            commonVariations: [
                "Extremely wide and thin",
                "Moderately wide and thin",
                "With varying corner shape"
            ],
            ethnicExample: "Found across multiple ethnic backgrounds"
        }
    },

    // Eyebrows descriptions
    Eyebrows: {
        arched: {
            primaryDescription: "High arch that creates a dramatic curve.",
            visualCharacteristics: [
                "Pronounced peak in middle-to-outer section",
                "Clear angular change in direction",
                "Higher peak than other shapes",
                "Distinctive silhouette"
            ],
            distinguishingAttributes: [
                "Creates an alert, expressive appearance",
                "Often adds drama to facial expressions",
                "Can create impression of surprise or interest"
            ],
            commonVariations: [
                "High arch",
                "Moderate arch",
                "With rounded or angular peak"
            ],
            ethnicExample: "Often seen in Mediterranean and Middle Eastern features"
        },
        straight: {
            primaryDescription: "Minimal arch, creating a horizontal line across the brow.",
            visualCharacteristics: [
                "Linear shape with little to no curve",
                "Relatively even height throughout",
                "Often with squared-off ends",
                "Direct, horizontal orientation"
            ],
            distinguishingAttributes: [
                "Common in East Asian populations",
                "Creates a serious, thoughtful expression",
                "Provides a strong frame for the eyes"
            ],
            commonVariations: [
                "Perfectly straight",
                "Slightly angled straight",
                "With blunt or tapered ends"
            ],
            ethnicExample: "Common in East Asian populations"
        },
        softly_arched: {
            primaryDescription: "Gentle, subtle curvature with minimal peak.",
            visualCharacteristics: [
                "Low, gradual arch",
                "Smooth transition throughout",
                "Rounded rather than angular",
                "Even curvature without sharp changes"
            ],
            distinguishingAttributes: [
                "Prevalent in Northern European populations",
                "Creates a natural, approachable expression",
                "Complements a variety of eye shapes"
            ],
            commonVariations: [
                "Barely perceptible arch",
                "Low soft arch",
                "Medium soft arch"
            ],
            ethnicExample: "Prevalent in Northern European populations"
        },
        round: {
            primaryDescription: "Smooth, circular arch without angles.",
            visualCharacteristics: [
                "Even, curved appearance",
                "No sharp transitions",
                "Bowl-like shape",
                "Soft beginning and end points"
            ],
            distinguishingAttributes: [
                "Common across multiple ethnic backgrounds",
                "Creates a gentle, approachable expression",
                "Complements rounded facial features"
            ],
            commonVariations: [
                "Low rounded arch",
                "High rounded arch",
                "Semi-circular rounded"
            ],
            ethnicExample: "Common across multiple ethnic backgrounds"
        },
        flat: {
            primaryDescription: "Minimal arch, appearing almost horizontal.",
            visualCharacteristics: [
                "Very little vertical change",
                "Almost straight appearance",
                "Consistent thickness possible",
                "Subtle definition"
            ],
            distinguishingAttributes: [
                "Creates a relaxed, calm appearance",
                "Often appears natural and unaltered",
                "Complements low brow bones"
            ],
            commonVariations: [
                "Completely flat",
                "Nearly flat with subtle rise",
                "With varying thicknesses"
            ],
            ethnicExample: "Found across multiple ethnic backgrounds"
        },
        "s-shaped": {
            primaryDescription: "Slight curve with a gentle S-shaped bend.",
            visualCharacteristics: [
                "Multiple direction changes",
                "Subtle wave pattern",
                "Complex contour",
                "Often thinner at curves"
            ],
            distinguishingAttributes: [
                "Found in some African and European populations",
                "Creates a distinctive, unique appearance",
                "Adds character and visual interest"
            ],
            commonVariations: [
                "Subtle S-curve",
                "Pronounced S-curve",
                "Asymmetrical S-curve"
            ],
            ethnicExample: "Found in some African and European populations"
        },
        angled: {
            primaryDescription: "Sharp, defined angled arch with distinct direction change.",
            visualCharacteristics: [
                "Clear angle point rather than curve",
                "Distinct direction change",
                "Often with straight segments",
                "More geometric appearance"
            ],
            distinguishingAttributes: [
                "Frequently seen in some South American and European populations",
                "Creates a strong, defined expression",
                "Adds structural emphasis to the face"
            ],
            commonVariations: [
                "Slightly angular",
                "Sharp angular",
                "With straight or curved tails"
            ],
            ethnicExample: "Frequently seen in some South American and European populations"
        },
        textured: {
            primaryDescription: "Full and bushy with a natural, unkempt appearance.",
            visualCharacteristics: [
                "Visible individual hairs",
                "Less defined edges",
                "Often fuller and thicker",
                "Natural, ungroomed appearance"
            ],
            distinguishingAttributes: [
                "Creates a natural, organic appearance",
                "Often associated with masculinity",
                "Provides strong facial framing"
            ],
            commonVariations: [
                "Lightly textured",
                "Very bushy and textured",
                "With varying overall shapes"
            ],
            ethnicExample: "Found across various ethnic backgrounds"
        }
    },
    eyebrowThickness: {
        thin: {
            primaryDescription: "Narrow and fine, often more delicate in appearance.",
            visualCharacteristics: [
                "Minimal vertical height",
                "Delicate appearance",
                "Often more precise outline",
                "Reduced visual weight"
            ],
            distinguishingAttributes: [
                "Creates a refined, elegant appearance",
                "Can emphasize other facial features",
                "Often appears more groomed or styled"
            ],
            commonVariations: [
                "Pencil thin",
                "Moderately thin",
                "With defined or soft edges"
            ],
            ethnicExample: "Varies across populations"
        },
        medium: {
            primaryDescription: "Balanced thickness, neither thin nor thick.",
            visualCharacteristics: [
                "Moderate vertical height",
                "Visible but not dominant",
                "Natural-looking density",
                "Proportional to facial features"
            ],
            distinguishingAttributes: [
                "Creates a natural, balanced appearance",
                "Complements most facial types",
                "Versatile for various expressions"
            ],
            commonVariations: [
                "Slightly thinner medium",
                "Slightly thicker medium",
                "With various shape options"
            ],
            ethnicExample: "Common across multiple ethnic backgrounds"
        },
        thick: {
            primaryDescription: "Substantial vertical height with bold appearance.",
            visualCharacteristics: [
                "Greater vertical measurement",
                "More visual prominence",
                "Strong framing element",
                "Often fuller density"
            ],
            distinguishingAttributes: [
                "Creates a strong, distinctive appearance",
                "Often associated with youthfulness",
                "Provides dramatic framing for eyes"
            ],
            commonVariations: [
                "Moderately thick",
                "Very thick",
                "With groomed or natural edges"
            ],
            ethnicExample: "Common in Middle Eastern and Mediterranean populations"
        },
        full: {
            primaryDescription: "Thick and dense eyebrows that create a bold look.",
            visualCharacteristics: [
                "Maximum thickness and density",
                "Strong visual presence",
                "Substantial framing effect",
                "Commanding appearance"
            ],
            distinguishingAttributes: [
                "Creates a powerful, striking appearance",
                "Often becomes a defining facial feature",
                "Provides strong contrast with other features"
            ],
            commonVariations: [
                "Naturally full",
                "Groomed full",
                "With various shape options"
            ],
            ethnicExample: "Common in Middle Eastern, Mediterranean, and some Asian populations"
        }
    },

    // Cheekbones descriptions
    Cheekbones: {
        high: {
            primaryDescription: "Prominent, raised bone structure above cheek area.",
            visualCharacteristics: [
                "Elevated position on face",
                "Creates shadow beneath bone",
                "Often creates distinctive highlight",
                "Visible structure even with fuller faces"
            ],
            distinguishingAttributes: [
                "Common in East Asian and Native American populations",
                "Creates elegant facial structure",
                "Often associated with modeling industry standards"
            ],
            commonVariations: [
                "High and narrow",
                "High and wide",
                "High with soft or sharp definition"
            ],
            ethnicExample: "Common in East Asian and Native American populations"
        },
        low: {
            primaryDescription: "Cheekbone structure positioned lower on the face.",
            visualCharacteristics: [
                "Less elevation from center of face",
                "Often creates fuller mid-face appearance",
                "Less pronounced shadow patterns",
                "Can create fuller appearance in mid-face"
            ],
            distinguishingAttributes: [
                "Creates a youthful, filled appearance",
                "Often softens facial angles",
                "Provides less dramatic profile"
            ],
            commonVariations: [
                "Slightly low",
                "Very low",
                "With varying definition"
            ],
            ethnicExample: "Found across various ethnic backgrounds"
        },
        wide: {
            primaryDescription: "Broad cheekbone width relative to face.",
            visualCharacteristics: [
                "Greater horizontal span",
                "Placed farther from facial center",
                "Creates distinctive facial width",
                "Often with fuller appearance"
            ],
            distinguishingAttributes: [
                "Found in some African and Eastern European populations",
                "Creates an open, expansive facial appearance",
                "Often provides distinctive racial identification"
            ],
            commonVariations: [
                "Wide and high",
                "Wide and low",
                "Wide with varying definition"
            ],
            ethnicExample: "Found in some African and Eastern European populations"
        },
        narrow: {
            primaryDescription: "Delicate, less pronounced cheekbone structure with reduced width.",
            visualCharacteristics: [
                "Reduced horizontal span",
                "Closer to facial center",
                "Creates more slender appearance",
                "Often with more defined contours"
            ],
            distinguishingAttributes: [
                "Common in some Asian populations",
                "Creates a delicate, refined appearance",
                "Often elongates the face visually"
            ],
            commonVariations: [
                "Very narrow",
                "Moderately narrow",
                "Narrow with high or low positioning"
            ],
            ethnicExample: "Common in some Asian populations"
        },
        flat: {
            primaryDescription: "Minimal protrusion with reduced dimensionality.",
            visualCharacteristics: [
                "Limited forward projection",
                "Smooth transition to surrounding areas",
                "Minimal shadowing effect",
                "Less defined contour"
            ],
            distinguishingAttributes: [
                "Creates a smooth, even facial plane",
                "Often appears more youthful",
                "Complements other subtle features"
            ],
            commonVariations: [
                "Very flat",
                "Somewhat flat",
                "With varying widths"
            ],
            ethnicExample: "Varies across populations"
        },
        angular: {
            primaryDescription: "Sharp, defined cheekbone structure with distinct planes.",
            visualCharacteristics: [
                "Clear transition between planes",
                "Creates defined shadows",
                "Distinctive edge quality",
                "Strong directional element"
            ],
            distinguishingAttributes: [
                "Often seen in Mediterranean and Middle Eastern features",
                "Creates a striking, sculptural appearance",
                "Provides strong photographic structure"
            ],
            commonVariations: [
                "Slightly angular",
                "Dramatically angular",
                "Angular with high or low positioning"
            ],
            ethnicExample: "Often seen in Mediterranean and Middle Eastern features"
        },
        rounded: {
            primaryDescription: "Soft, curved cheekbone appearance with smooth transitions.",
            visualCharacteristics: [
                "Gentle curvature",
                "Smooth transitions to surrounding areas",
                "Softer shadow patterns",
                "Less defined edges"
            ],
            distinguishingAttributes: [
                "Creates a soft, youthful appearance",
                "Often appears more approachable",
                "Complements other rounded features"
            ],
            commonVariations: [
                "Subtly rounded",
                "Very rounded",
                "With varying prominence"
            ],
            ethnicExample: "Common across multiple ethnic backgrounds"
        },
        asymmetrical: {
            primaryDescription: "Different appearance or height between left and right cheekbones.",
            visualCharacteristics: [
                "Noticeable difference between sides",
                "Can affect shadow patterns",
                "May create distinctive character",
                "Often subtle but perceptible"
            ],
            distinguishingAttributes: [
                "Adds character and uniqueness",
                "Creates more natural, less 'perfect' appearance",
                "Often adds visual interest"
            ],
            commonVariations: [
                "Slightly asymmetrical",
                "Noticeably asymmetrical",
                "With other varying characteristics"
            ],
            ethnicExample: "Found across all ethnic backgrounds"
        },
        defined: {
            primaryDescription: "Clearly outlined and prominent, adding structure to the face.",
            visualCharacteristics: [
                "Clear visual boundaries",
                "Distinct from surrounding facial areas",
                "Creates structured shadow patterns",
                "Well-articulated form"
            ],
            distinguishingAttributes: [
                "Creates a sculpted, mature appearance",
                "Often associated with low body fat percentage",
                "Provides strong facial architecture"
            ],
            commonVariations: [
                "Subtly defined",
                "Highly defined",
                "With varying positions"
            ],
            ethnicExample: "Varies across populations"
        },
        soft: {
            primaryDescription: "Subtle and less pronounced, creating a gentle transition.",
            visualCharacteristics: [
                "Minimal protrusion",
                "Smooth transitions to surrounding areas",
                "Gentle contour",
                "Blended appearance"
            ],
            distinguishingAttributes: [
                "Creates a youthful, gentle appearance",
                "Often appears more approachable",
                "Complements other soft features"
            ],
            commonVariations: [
                "Very soft",
                "Moderately soft",
                "Soft with various positions"
            ],
            ethnicExample: "Prevalent in Northern European populations"
        }
    },

    // Jaw Line descriptions
    Jaw_Line: {
        square: {
            primaryDescription: "Strong, angular corners with defined edges.",
            visualCharacteristics: [
                "Pronounced right angles at jaw corners",
                "Horizontal line along bottom edge",
                "Clear definition between face and neck",
                "Often with wider appearance"
            ],
            distinguishingAttributes: [
                "Common in Northern European and Native American populations",
                "Creates a strong, assertive appearance",
                "Often associated with masculinity"
            ],
            commonVariations: [
                "Extremely square with sharp angles",
                "Moderately square with softened corners",
                "Wide or narrow square"
            ],
            ethnicExample: "Common in Northern European and Native American populations"
        },
        oval: {
            primaryDescription: "Rounded and smooth jawline that tapers gently.",
            visualCharacteristics: [
                "Smooth curve from ear to chin",
                "No sharp angles",
                "Gentle tapering",
                "Balanced proportions"
            ],
            distinguishingAttributes: [
                "Creates a balanced, harmonious appearance",
                "Complements oval face shapes",
                "Provides soft transition to neck"
            ],
            commonVariations: [
                "Elongated oval",
                "Compact oval",
                "With varying chin definition"
            ],
            ethnicExample: "Common across multiple ethnic backgrounds"
        },
        round: {
            primaryDescription: "Soft, smooth edges with minimal definition.",
            visualCharacteristics: [
                "Curved transition from chin to ear",
                "Gentle angle changes",
                "Smooth contours without hard edges",
                "Continuous curve"
            ],
            distinguishingAttributes: [
                "Prevalent in some Asian and Southern European populations",
                "Creates a youthful, approachable appearance",
                "Often associated with femininity"
            ],
            commonVariations: [
                "Very rounded with minimal definition",
                "Partially rounded with some structure",
                "Wide or narrow rounded"
            ],
            ethnicExample: "Prevalent in some Asian and Southern European populations"
        },
        heart: {
            primaryDescription: "Narrower at jaw, wider at cheekbones, with a pointed chin.",
            visualCharacteristics: [
                "Pointed or rounded chin",
                "Narrower lower face",
                "Wider upper face",
                "Creates inverted triangular effect"
            ],
            distinguishingAttributes: [
                "Found in some European and Asian populations",
                "Creates a feminine, youthful appearance",
                "Complements wider cheekbones"
            ],
            commonVariations: [
                "Subtle heart shape",
                "Pronounced heart shape",
                "With sharp or soft chin"
            ],
            ethnicExample: "Found in some European and Asian populations"
        },
        mandibular: {
            primaryDescription: "Pronounced with a more angular appearance, often found in strong jawlines.",
            visualCharacteristics: [
                "Strong bone structure",
                "Often wider at angles",
                "Pronounced definition",
                "Clear corner definition"
            ],
            distinguishingAttributes: [
                "Creates a strong, distinctive appearance",
                "Often associated with masculinity",
                "Provides clear facial boundary"
            ],
            commonVariations: [
                "Slightly mandibular",
                "Very pronounced mandibular",
                "With varying chin definition"
            ],
            ethnicExample: "Varies across ethnic backgrounds"
        },
        pointed: {
            primaryDescription: "Narrow, coming to a more defined point at the chin.",
            visualCharacteristics: [
                "Triangular shape from front view",
                "Tapered appearance",
                "Narrower at chin than at ears",
                "Often with delicate appearance"
            ],
            distinguishingAttributes: [
                "Often seen in Mediterranean and some African features",
                "Creates an elegant, refined appearance",
                "Balances wider upper facial features"
            ],
            commonVariations: [
                "Extremely pointed chin",
                "Moderately pointed",
                "With sharp or soft chin tip"
            ],
            ethnicExample: "Often seen in Mediterranean and some African features"
        },
        receding: {
            primaryDescription: "Jawline that appears to be less prominent or pushed back.",
            visualCharacteristics: [
                "Limited forward projection",
                "Often creates softer profile",
                "Less defined angle",
                "Can create appearance of shorter lower face"
            ],
            distinguishingAttributes: [
                "Creates a softer, less angular appearance",
                "Often emphasizes other facial features",
                "Can create distinctive profile"
            ],
            commonVariations: [
                "Slightly receding",
                "Significantly receding",
                "With various chin shapes"
            ],
            ethnicExample: "Found across various ethnic backgrounds"
        },
        wide: {
            primaryDescription: "Broad jaw that creates a more robust look.",
            visualCharacteristics: [
                "Greater horizontal span",
                "Creates substantial lower face width",
                "Often with more facial volume",
                "Creates stronger facial outline"
            ],
            distinguishingAttributes: [
                "Creates a strong, substantial appearance",
                "Often balances wider foreheads",
                "Provides structural definition"
            ],
            commonVariations: [
                "Very wide",
                "Moderately wide",
                "Wide with various definition levels"
            ],
            ethnicExample: "Found in some Eastern European and Native American populations"
        },
        defined: {
            primaryDescription: "Sharp features and clear contours along the jawline.",
            visualCharacteristics: [
                "Clear outline",
                "Visible bone structure",
                "Distinct from surrounding areas",
                "Creates defined shadows"
            ],
            distinguishingAttributes: [
                "Often associated with low body fat percentage",
                "Creates a structured, mature appearance",
                "Provides strong facial framing"
            ],
            commonVariations: [
                "Subtly defined",
                "Highly defined",
                "With varying jawline shapes"
            ],
            ethnicExample: "Varies across populations"
        },
        soft: {
            primaryDescription: "More gentle and less angular with smooth transitions.",
            visualCharacteristics: [
                "Minimal definition",
                "Gentle transitions",
                "Blended appearance with neck",
                "Rounded rather than angular"
            ],
            distinguishingAttributes: [
                "Creates a gentle, approachable appearance",
                "Often associated with femininity or youth",
                "Complements other soft facial features"
            ],
            commonVariations: [
                "Very soft with minimal definition",
                "Moderately soft",
                "With various chin shapes"
            ],
            ethnicExample: "Common across multiple ethnic backgrounds"
        }
    },

    // Ears descriptions
    Ears: {
        standard: {
            primaryDescription: "Typical ear shape with a noticeable lobe and defined helix.",
            visualCharacteristics: [
                "Balanced proportions",
                "Clear anatomical structures",
                "Average size relative to head",
                "Neither protruding nor flat"
            ],
            distinguishingAttributes: [
                "Creates a harmonious, balanced appearance",
                "Blends naturally with head profile",
                "Complements most facial features"
            ],
            commonVariations: [
                "Slight variations in size",
                "Varying lobe size",
                "Minor helix differences"
            ],
            ethnicExample: "Common across multiple populations"
        },
        pointed: {
            primaryDescription: "Ears that taper to a point, resembling elf-like features.",
            visualCharacteristics: [
                "Upper helix narrows to a point",
                "Often with more defined structure",
                "Distinctive silhouette",
                "Visual elongation"
            ],
            distinguishingAttributes: [
                "Often seen in some European and Middle Eastern features",
                "Creates a distinctive, sometimes elfin appearance",
                "Adds character to the face"
            ],
            commonVariations: [
                "Subtly pointed",
                "Prominently pointed",
                "With varying helix definition"
            ],
            ethnicExample: "Often seen in some European and Middle Eastern features"
        },
        round: {
            primaryDescription: "Ears with a soft, circular shape at the top.",
            visualCharacteristics: [
                "Curved outer rim",
                "Smooth, continuous contour",
                "Even curvature throughout",
                "Gentle transitions between structures"
            ],
            distinguishingAttributes: [
                "Common in some Asian and European populations",
                "Creates a soft, harmonious appearance",
                "Often appears proportionally balanced"
            ],
            commonVariations: [
                "Very rounded with minimal definition",
                "Partially rounded with some structure",
                "Large or small round"
            ],
            ethnicExample: "Common in some Asian and European populations"
        },
        protruding: {
            primaryDescription: "Ears that extend outward from the head.",
            visualCharacteristics: [
                "Increased angle from skull",
                "Visible from front view",
                "Creates distinctive shadow patterns",
                "More three-dimensional appearance"
            ],
            distinguishingAttributes: [
                "Found in various ethnic backgrounds",
                "Creates a distinctive profile silhouette",
                "Sometimes becomes a defining characteristic"
            ],
            commonVariations: [
                "Slightly protruding",
                "Moderately protruding",
                "Significantly protruding"
            ],
            ethnicExample: "Found in various ethnic backgrounds"
        },
        flat: {
            primaryDescription: "Less pronounced, sitting closer to the head with minimal definition.",
            visualCharacteristics: [
                "Limited outward angle",
                "Close to skull",
                "Often less visible from front view",
                "Creates cleaner profile"
            ],
            distinguishingAttributes: [
                "Creates a streamlined profile appearance",
                "Often appears neat and unobtrusive",
                "Complements sleek hairstyles"
            ],
            commonVariations: [
                "Very flat against head",
                "Partially flat",
                "With varying anatomical definition"
            ],
            ethnicExample: "Common in some Asian populations"
        },
        lobed: {
            primaryDescription: "Ears with a distinct lobe that hangs free.",
            visualCharacteristics: [
                "Pronounced, often larger earlobe",
                "Clear separation from jawline",
                "Hanging appearance below attachment point",
                "Often moves independently"
            ],
            distinguishingAttributes: [
                "Common genetic trait across populations",
                "Provides balance to larger ears",
                "Often accommodates earrings well"
            ],
            commonVariations: [
                "Small lobe",
                "Large lobe",
                "With varying lobe shapes"
            ],
            ethnicExample: "Common in many ethnic groups"
        },
        cupped: {
            primaryDescription: "Ears that have a more rounded top, resembling a cup shape.",
            visualCharacteristics: [
                "Concave inner surface",
                "Curved outer rim",
                "Often catches sound well",
                "Bowl-like appearance"
            ],
            distinguishingAttributes: [
                "Creates a distinctive profile appearance",
                "Often provides good acoustical properties",
                "Adds character to face"
            ],
            commonVariations: [
                "Subtly cupped",
                "Deeply cupped",
                "With varying rim definition"
            ],
            ethnicExample: "Found across various ethnic backgrounds"
        },
        rimmed: {
            primaryDescription: "Prominent outer rim with a clearly defined shape.",
            visualCharacteristics: [
                "Well-defined helix (outer rim)",
                "Often creates shadow patterns",
                "Clear structural definition",
                "Distinctive outline"
            ],
            distinguishingAttributes: [
                "Adds architectural interest to the ear",
                "Often creates a well-structured appearance",
                "Provides clear definition in profile"
            ],
            commonVariations: [
                "Subtly rimmed",
                "Prominently rimmed",
                "With varying rim thickness"
            ],
            ethnicExample: "Found across various ethnic backgrounds"
        },
        asymmetrical: {
            primaryDescription: "Uneven sizes or shapes on either side of the head.",
            visualCharacteristics: [
                "Noticeable difference between left and right ears",
                "Can vary in size, shape, or angle",
                "May affect how accessories are worn",
                "Creates unique appearance"
            ],
            distinguishingAttributes: [
                "Adds character and uniqueness",
                "Creates a more natural, less 'perfect' appearance",
                "Common and normal variation"
            ],
            commonVariations: [
                "Subtle asymmetry",
                "Pronounced asymmetry",
                "Differences in specific features"
            ],
            ethnicExample: "Found across all ethnic backgrounds"
        },
        curved: {
            primaryDescription: "Ears that have a natural curve or arch without sharp angles.",
            visualCharacteristics: [
                "Gentle curvature throughout",
                "Smooth transitions between structures",
                "Flowing rather than angular appearance",
                "Graceful outline"
            ],
            distinguishingAttributes: [
                "Creates an elegant, balanced appearance",
                "Often complements other curved facial features",
                "Provides natural, organic aesthetic"
            ],
            commonVariations: [
                "Subtly curved",
                "Pronouncedly curved",
                "With varying curve patterns"
            ],
            ethnicExample: "Common across multiple ethnic backgrounds"
        }
    },

    // Head Shape descriptions
    Head_Shape: {
        oval: {
            primaryDescription: "Smooth, elongated cranial structure with balanced proportions.",
            visualCharacteristics: [
                "Slightly longer than wide",
                "Gently curved all around",
                "Balanced proportions",
                "Smooth transitions between areas"
            ],
            distinguishingAttributes: [
                "Common in many European populations",
                "Creates a harmonious foundation for features",
                "Complements a variety of face shapes"
            ],
            commonVariations: [
                "Slightly elongated oval",
                "Wider oval",
                "With varying height"
            ],
            ethnicExample: "Common in many European populations"
        },
        round: {
            primaryDescription: "Symmetrical, circular cranial form with similar width and height.",
            visualCharacteristics: [
                "Similar measurements in all directions",
                "Smooth, continuous curve",
                "Minimal flat areas",
                "Even distribution"
            ],
            distinguishingAttributes: [
                "Prevalent in some Asian and African populations",
                "Creates a youthful, balanced appearance",
                "Forms a complementary base for rounded faces"
            ],
            commonVariations: [
                "Nearly perfect circular",
                "Slightly wider than tall",
                "Slightly taller than wide"
            ],
            ethnicExample: "Prevalent in some Asian and African populations"
        },
        square: {
            primaryDescription: "Broader, more angular cranial structure with similar width and height.",
            visualCharacteristics: [
                "Similar height and width",
                "Flatter sides and top",
                "More angular transitions",
                "Fuller appearance"
            ],
            distinguishingAttributes: [
                "Found in some Native American and Eastern European populations",
                "Creates a strong, substantial appearance",
                "Forms foundation for square faces"
            ],
            commonVariations: [
                "Very square with flat planes",
                "Moderately square with softer angles",
                "Wide or narrow square"
            ],
            ethnicExample: "Found in some Native American and Eastern European populations"
        },
        rectangular: {
            primaryDescription: "Longer and more angular, with parallel sides and similar width at top and bottom.",
            visualCharacteristics: [
                "Extended height",
                "Flatter sides, top and back",
                "Angular corners",
                "Elongated appearance"
            ],
            distinguishingAttributes: [
                "Frequently observed in some Middle Eastern populations",
                "Creates a distinguished, substantial appearance",
                "Forms foundation for rectangular faces"
            ],
            commonVariations: [
                "Extremely rectangular",
                "Moderately rectangular",
                "With softened or sharp angles"
            ],
            ethnicExample: "Frequently observed in some Middle Eastern populations"
        },
        heart: {
            primaryDescription: "Wider at the top, narrowing toward the chin area.",
            visualCharacteristics: [
                "Fuller upper cranium",
                "Narrowing toward lower face",
                "Often with rounded top",
                "Tapered bottom"
            ],
            distinguishingAttributes: [
                "Creates a balanced, appealing outline",
                "Complements heart-shaped faces",
                "Provides natural framing for features"
            ],
            commonVariations: [
                "Subtly heart-shaped",
                "Prominently heart-shaped",
                "With varying degrees of tapering"
            ],
            ethnicExample: "Found across various ethnic backgrounds"
        },
        diamond: {
            primaryDescription: "Narrow at top and bottom with the widest point in the middle.",
            visualCharacteristics: [
                "Angular transitions",
                "Widest at temple/ear area",
                "Narrower at crown and jaw",
                "Distinct geometric quality"
            ],
            distinguishingAttributes: [
                "Creates distinctive profile silhouette",
                "Complements diamond-shaped faces",
                "Provides interesting structural outline"
            ],
            commonVariations: [
                "Subtle diamond shape",
                "Pronounced diamond shape",
                "With varying proportions"
            ],
            ethnicExample: "Found across various ethnic backgrounds"
        },
        triangle: {
            primaryDescription: "Narrower at top, wider at base.",
            visualCharacteristics: [
                "Wider at temples/ears",
                "Narrower at crown",
                "Angled sides",
                "Inverted triangular effect"
            ],
            distinguishingAttributes: [
                "Seen in various ethnic backgrounds",
                "Creates a distinctive silhouette",
                "Often complemented by specific hairstyles"
            ],
            commonVariations: [
                "Subtle triangular shape",
                "Pronounced triangular shape",
                "With varying crown width"
            ],
            ethnicExample: "Seen in various ethnic backgrounds"
        },
        inverted_triangle: {
            primaryDescription: "Wider at top, narrower at base, resembling an upside-down triangle.",
            visualCharacteristics: [
                "Broader forehead/crown",
                "Narrower at jaw/neck area",
                "Angled sides",
                "Distinctive tapering shape"
            ],
            distinguishingAttributes: [
                "Creates impressive upper cranium appearance",
                "Often complements intellectual features",
                "Provides natural framing for face"
            ],
            common