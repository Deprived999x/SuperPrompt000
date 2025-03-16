const faceShapeDescriptions = {
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
    triangle: {
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
    inverted_triangle: {
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
    }
};

module.exports = faceShapeDescriptions;