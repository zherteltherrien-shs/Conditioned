/* ================================================================
   CONDITIONED — AP Psychology Question Bank
   2024-25 CED · 5-Unit Structure
   ================================================================
   FORMAT:
   {
     unit:    "1–5"     (2024 CED unit number),
     concept: "SHORT LABEL",
     type:    "standard" | "AAQ" | "EBQ",
     prompt:  "The question stem",
     choices: ["A","B","C","D"],
     correct: 0,        // 0-based index
     why:     "Explanation"
   }

   UNITS (2024-25 CED):
     1 — Biological Bases of Behavior
         (neurons, brain, nervous system, endocrine, sleep,
          sensation, perception, consciousness)
     2 — Cognition
         (memory, thinking, language, intelligence,
          problem-solving, heuristics)
     3 — Development and Learning
         (Piaget, Erikson, Kohlberg, attachment, prenatal,
          classical/operant conditioning, observational learning)
     4 — Social Psychology and Personality
         (conformity, obedience, attitudes, attribution,
          prejudice, group behavior, personality theories)
     5 — Mental and Physical Health
         (disorders, treatment, stress, coping, emotion,
          motivation, wellness)

   QUESTION TYPES:
     standard — Scenario-based knowledge application
     AAQ      — Argumentation & Analysis (evaluate claims,
                 identify flaws, weigh perspectives)
     EBQ      — Evidence-Based (interpret data, evaluate
                 studies, draw conclusions from evidence)

   Research methods & data interpretation are woven
   throughout all units per the 2024 Science Practices.
   ================================================================ */
window.QUESTIONS = [

  // ═══════════════════════════════════════════════════════════════
  // UNIT 1 — BIOLOGICAL BASES OF BEHAVIOR
  // ═══════════════════════════════════════════════════════════════

  {
    unit: "1",
    concept: "NEURONS",
    type: "standard",
    prompt: "During an action potential, which ion rushes INTO the neuron, causing depolarization?",
    choices: [
      "Potassium (K+)",
      "Sodium (Na+)",
      "Chloride (Cl−)",
      "Calcium (Ca2+)"
    ],
    correct: 1,
    why: "Sodium (Na+) channels open first during an action potential, allowing Na+ to rush in and making the inside of the neuron more positive (depolarization). Potassium flows out during repolarization."
  },
  {
    unit: "1",
    concept: "NEURONS",
    type: "standard",
    prompt: "Marta is a neuroscience student studying how signals travel faster in some neurons than others. She discovers that a fatty substance wrapping the axon allows the signal to jump between gaps. The substance Marta is studying is the:",
    choices: [
      "Synaptic vesicle",
      "Myelin sheath",
      "Dendrite membrane",
      "Node of Ranvier"
    ],
    correct: 1,
    why: "The myelin sheath insulates the axon, forcing the electrical signal to 'jump' from one node of Ranvier to the next (saltatory conduction). This dramatically increases transmission speed."
  },
  {
    unit: "1",
    concept: "NEUROTRANSMITTERS",
    type: "standard",
    prompt: "Mr. Torres, who was recently diagnosed with Parkinson's disease, has tremors and difficulty initiating movement. Which neurotransmitter deficiency is most directly linked to his symptoms?",
    choices: [
      "Serotonin",
      "Acetylcholine",
      "Dopamine",
      "GABA"
    ],
    correct: 2,
    why: "Parkinson's disease results from degeneration of dopamine-producing neurons in the substantia nigra. Too little dopamine leads to movement difficulties. Excess dopamine activity is linked to schizophrenia symptoms."
  },
  {
    unit: "1",
    concept: "NEUROTRANSMITTERS",
    type: "AAQ",
    prompt: "A pharmaceutical company claims its new drug treats depression by 'increasing serotonin in the brain.' A psychologist critiques this claim by noting that the drug blocks reuptake rather than increasing production. Which of the following best supports the psychologist's critique?",
    choices: [
      "Blocking reuptake keeps existing serotonin in the synapse longer but does not cause the brain to produce more",
      "Serotonin is not involved in depression",
      "Reuptake only affects dopamine, not serotonin",
      "Blocking reuptake decreases the amount of serotonin available"
    ],
    correct: 0,
    why: "SSRIs block the reabsorption (reuptake) of serotonin by the sending neuron, increasing availability in the synaptic gap — but the brain isn't actually producing more serotonin. The distinction between availability and production matters."
  },
  {
    unit: "1",
    concept: "BRAIN STRUCTURE",
    type: "standard",
    prompt: "Fiona looked at her drawing of a flower and decided it might need more color. Which of the following lobes of the brain helps Fiona identify the form and color of the flower?",
    choices: [
      "Frontal",
      "Occipital",
      "Parietal",
      "Temporal"
    ],
    correct: 1,
    why: "The occipital lobe is where the primary visual cortex is located. It processes visual information including form, color, and motion."
  },
  {
    unit: "1",
    concept: "BRAIN STRUCTURE",
    type: "standard",
    prompt: "After a car accident, Deshawn has difficulty producing fluent speech but can still understand what others say to him. The area most likely damaged is:",
    choices: [
      "Wernicke's area",
      "Broca's area",
      "The angular gyrus",
      "The hippocampus"
    ],
    correct: 1,
    why: "Broca's area (left frontal lobe) controls speech production. Damage causes Broca's aphasia — the person understands language but struggles to speak fluently. Wernicke's area handles comprehension."
  },
  {
    unit: "1",
    concept: "BRAIN STRUCTURE",
    type: "standard",
    prompt: "Teo suffered a concussion after getting hit in the head during a game. Since his injury, he cannot plan or follow instructions as well as he could before. Which brain lobe is most associated with these abilities?",
    choices: [
      "Temporal lobes",
      "Occipital lobes",
      "Frontal lobes",
      "Parietal lobes"
    ],
    correct: 2,
    why: "Executive functioning — including planning, sequencing, decision-making, and impulse control — is located in the frontal lobes, specifically the prefrontal cortex."
  },
  {
    unit: "1",
    concept: "BRAIN STRUCTURE",
    type: "standard",
    prompt: "When Jenna overslept and realized she was late, she jumped out of bed with her heart pounding and palms sweating. Which brain structure was primarily responsible for her anxious emotional response?",
    choices: [
      "Temporal lobe",
      "Amygdala",
      "Somatosensory cortex",
      "Cerebellum"
    ],
    correct: 1,
    why: "The amygdala processes emotional responses to stimuli, especially fear and anxiety. It's part of the limbic system and plays a central role in fear conditioning and emotional memory."
  },
  {
    unit: "1",
    concept: "BRAIN STRUCTURE",
    type: "standard",
    prompt: "Patient H.M. had his hippocampi surgically removed to treat epilepsy. After surgery, he could no longer form new explicit memories but could still learn new motor skills. This finding demonstrates that the hippocampus is essential for:",
    choices: [
      "Procedural memory formation",
      "Forming new explicit long-term memories",
      "Processing emotional reactions",
      "Maintaining balance and coordination"
    ],
    correct: 1,
    why: "The hippocampus is critical for forming new explicit (declarative) memories. H.M. could still form procedural (implicit) memories, showing these are handled by different brain systems — the cerebellum and basal ganglia."
  },
  {
    unit: "1",
    concept: "BRAIN STRUCTURE",
    type: "standard",
    prompt: "The hypothalamus regulates all of the following EXCEPT:",
    choices: [
      "Body temperature",
      "Hunger and thirst",
      "Language production",
      "Hormonal activity via the pituitary gland"
    ],
    correct: 2,
    why: "The hypothalamus maintains homeostasis — regulating temperature, hunger, thirst, sexual behavior, and the endocrine system via the pituitary. Language production is handled by Broca's area in the frontal cortex."
  },
  {
    unit: "1",
    concept: "BRAIN RESEARCH",
    type: "EBQ",
    prompt: "Researchers used fMRI to scan participants' brains while they viewed emotional images. They found increased blood flow to the amygdala when participants viewed frightening images. Which of the following is the most accurate conclusion?",
    choices: [
      "The amygdala causes fear in all situations",
      "Increased blood flow to the amygdala is associated with processing fear-related stimuli",
      "fMRI proves that the amygdala is the only brain area involved in fear",
      "The participants were more afraid than they reported"
    ],
    correct: 1,
    why: "fMRI measures blood oxygenation, showing correlation between brain activity and tasks. It shows association, not causation, and cannot prove the amygdala is the ONLY area involved — other regions likely contribute."
  },
  {
    unit: "1",
    concept: "BRAIN STRUCTURE",
    type: "standard",
    prompt: "Split-brain research by Sperry and Gazzaniga demonstrated that in most right-handed people, the left hemisphere is specialized for:",
    choices: [
      "Spatial reasoning and face recognition",
      "Language processing and analytical thinking",
      "Emotional expression and creativity",
      "Processing musical melodies"
    ],
    correct: 1,
    why: "Split-brain studies showed the left hemisphere dominates for language, logic, and analytical processing. The right hemisphere specializes in spatial processing, facial recognition, and holistic thinking."
  },
  {
    unit: "1",
    concept: "NERVOUS SYSTEM",
    type: "standard",
    prompt: "The sympathetic nervous system is to ________ as the parasympathetic nervous system is to ________.",
    choices: [
      "Rest and digest; fight or flight",
      "Fight or flight; rest and digest",
      "Voluntary control; involuntary control",
      "Central processing; peripheral processing"
    ],
    correct: 1,
    why: "The sympathetic division mobilizes the body for emergency action ('fight or flight'). The parasympathetic division calms the body afterward ('rest and digest')."
  },
  {
    unit: "1",
    concept: "NERVOUS SYSTEM",
    type: "standard",
    prompt: "The somatic nervous system is to ________ as the autonomic nervous system is to ________.",
    choices: [
      "Involuntary actions; voluntary actions",
      "Voluntary muscle movements; involuntary bodily functions",
      "Sympathetic; parasympathetic",
      "Central; peripheral"
    ],
    correct: 1,
    why: "The somatic NS controls voluntary skeletal muscle movements. The autonomic NS controls involuntary functions like heart rate, digestion, and glandular activity. Both are divisions of the peripheral nervous system."
  },
  {
    unit: "1",
    concept: "BRAIN STRUCTURE",
    type: "standard",
    prompt: "Which of the following brain regions is primarily responsible for increasing heart rate in response to a fear-inducing stimulus?",
    choices: [
      "Medulla",
      "Parietal lobes",
      "Wernicke's area",
      "Corpus callosum"
    ],
    correct: 0,
    why: "The medulla (in the brainstem) controls vital autonomic functions including heart rate, breathing, and blood pressure. It would activate to increase heart rate during a fear response."
  },
  {
    unit: "1",
    concept: "ENDOCRINE SYSTEM",
    type: "standard",
    prompt: "The adrenal glands release cortisol and epinephrine during stress. These glands are part of the:",
    choices: [
      "Central nervous system",
      "Somatic nervous system",
      "Endocrine system",
      "Reticular activating system"
    ],
    correct: 2,
    why: "The adrenal glands sit atop the kidneys and are part of the endocrine system. They release stress hormones that prepare the body for fight-or-flight responses."
  },
  {
    unit: "1",
    concept: "NEURONS",
    type: "AAQ",
    prompt: "A student claims that 'neurons can fire at different strengths depending on how intense the stimulus is.' Which of the following best refutes this claim?",
    choices: [
      "The all-or-none principle states neurons fire at full strength or not at all; intensity is coded by firing rate and number of neurons",
      "Neurons always fire at the same rate regardless of stimulus",
      "Only sensory neurons follow the all-or-none principle",
      "The strength of neurotransmitter release varies with stimulus intensity"
    ],
    correct: 0,
    why: "The all-or-none principle means individual action potentials are always the same strength. The INTENSITY of a stimulus is coded by the rate of firing and the number of neurons activated, not by stronger individual signals."
  },
  {
    unit: "1",
    concept: "NEUROTRANSMITTERS",
    type: "standard",
    prompt: "Endorphins are the body's natural painkillers. Alan enjoys skydiving, and when he skydives, which neurotransmitter is most likely released in his brain's reward pathway?",
    choices: [
      "Melatonin",
      "Acetylcholine",
      "Dopamine",
      "Leptin"
    ],
    correct: 2,
    why: "Dopamine neurons are prevalent in the brain's reward pathway. Dopamine is released during pleasurable and risky activities, motivating people to repeat those behaviors."
  },
  {
    unit: "1",
    concept: "NEUROTRANSMITTERS",
    type: "standard",
    prompt: "GABA is the brain's main inhibitory neurotransmitter. A deficiency of GABA is most likely associated with:",
    choices: [
      "Depression",
      "Parkinson's disease",
      "Anxiety disorders",
      "Alzheimer's disease"
    ],
    correct: 2,
    why: "GABA inhibits neural firing. Too little GABA means neurons fire too easily, leading to anxiety and seizures. Anti-anxiety drugs (benzodiazepines) work by enhancing GABA's inhibitory effects."
  },
  {
    unit: "1",
    concept: "NEUROTRANSMITTERS",
    type: "standard",
    prompt: "Deterioration of neurons that produce acetylcholine is most closely associated with:",
    choices: [
      "Parkinson's disease",
      "Schizophrenia",
      "Alzheimer's disease",
      "Bipolar disorder"
    ],
    correct: 2,
    why: "Alzheimer's disease is linked to deterioration of ACh-producing neurons. Acetylcholine plays key roles in memory, learning, and muscle contraction."
  },
  {
    unit: "1",
    concept: "NEURONS",
    type: "standard",
    prompt: "Reuptake is the process by which:",
    choices: [
      "Neurotransmitters are released into the synaptic gap",
      "The presynaptic neuron reabsorbs excess neurotransmitters from the synapse",
      "Receptor sites on the postsynaptic neuron change shape",
      "An action potential travels down the axon"
    ],
    correct: 1,
    why: "Reuptake: the sending (presynaptic) neuron vacuums back excess neurotransmitters from the synaptic gap, recycling them. Many drugs work by blocking reuptake (SSRIs block serotonin reuptake; cocaine blocks dopamine reuptake)."
  },
  {
    unit: "1",
    concept: "GLIAL CELLS",
    type: "standard",
    prompt: "Dr. Dimou conducts experiments on brain cells that were once thought to be nonfunctioning but are now known to provide structure to the nervous system and assist in waste transport. Which cells is she studying?",
    choices: [
      "Glial cells",
      "Sensory neurons",
      "Motor neurons",
      "Photoreceptors"
    ],
    correct: 0,
    why: "Glial cells were originally thought to be nonfunctioning, but scientists now know they provide insulation, structure, and nutrient support to neurons in the nervous system."
  },
  {
    unit: "1",
    concept: "GENETICS",
    type: "EBQ",
    prompt: "Researchers study identical twins raised apart and find a concordance rate of 70% for a particular trait. Which of the following is the most accurate interpretation?",
    choices: [
      "The trait is entirely genetic",
      "Genetics play a significant but not exclusive role; environmental factors account for the remaining variation",
      "The environment is the primary influence on this trait",
      "The study proves causation between genes and the trait"
    ],
    correct: 1,
    why: "Identical twins share 100% DNA. A 70% concordance rate in twins raised apart suggests strong genetic influence, but the 30% discordance indicates environmental factors also matter. Correlation studies like this cannot prove causation."
  },
  {
    unit: "1",
    concept: "NEUROPLASTICITY",
    type: "standard",
    prompt: "After suffering a stroke that damaged part of her left hemisphere, Keisha gradually recovered some language ability over the following year. This recovery best illustrates:",
    choices: [
      "The split-brain phenomenon",
      "Neuroplasticity",
      "The all-or-none principle",
      "Sensory adaptation"
    ],
    correct: 1,
    why: "Neuroplasticity is the brain's ability to reorganize by forming new neural pathways. After injury, other brain areas can sometimes compensate for damaged regions, especially with therapy and practice."
  },
  {
    unit: "1",
    concept: "SLEEP",
    type: "standard",
    prompt: "Mrunmayee traveled for work across multiple time zones to a location 11 hours ahead of home. She was exhausted for the first few days. Which of the following was most likely disrupted?",
    choices: [
      "Brain plasticity",
      "Corpus callosum",
      "Accommodation",
      "Circadian rhythm"
    ],
    correct: 3,
    why: "The sleep/wake cycle is a circadian rhythm — roughly a 24-hour cycle regulated by the suprachiasmatic nucleus. Jet lag results from a mismatch between internal circadian rhythm and external time cues."
  },
  {
    unit: "1",
    concept: "SENSATION",
    type: "standard",
    prompt: "Transduction is the process of:",
    choices: [
      "Sending neural impulses from the thalamus to the cortex",
      "Converting physical energy from stimuli into neural signals",
      "Adapting to a constant sensory stimulus over time",
      "Combining information from multiple senses"
    ],
    correct: 1,
    why: "Transduction converts stimulus energy (light, sound waves, pressure, chemicals) into neural impulses the brain can interpret. Each sense has specialized receptors for this conversion."
  },
  {
    unit: "1",
    concept: "SENSATION",
    type: "standard",
    prompt: "The absolute threshold is defined as the minimum stimulation needed to:",
    choices: [
      "Notice a difference between two stimuli",
      "Detect a stimulus 50% of the time",
      "Cause pain in a sensory receptor",
      "Trigger an action potential in any neuron"
    ],
    correct: 1,
    why: "The absolute threshold is the minimum stimulus intensity needed for detection 50% of the time. Below this, the stimulus goes undetected."
  },
  {
    unit: "1",
    concept: "SENSATION",
    type: "standard",
    prompt: "Naveen holds two envelopes, one with a coin inside. He easily tells which is heavier. Then he holds two shoes, one containing an envelope with a coin. He cannot tell the difference. This illustrates:",
    choices: [
      "The absolute threshold",
      "Sensory adaptation",
      "Weber's law",
      "The all-or-none principle"
    ],
    correct: 2,
    why: "Weber's law: the just noticeable difference (JND) is a constant proportion of the original stimulus. A heavier baseline (shoe) requires a larger absolute change to notice a difference."
  },
  {
    unit: "1",
    concept: "SENSATION",
    type: "EBQ",
    prompt: "Dr. Kambeyanda conducts a cross-sectional study measuring absolute thresholds across age groups. Which operational definition best measures the absolute threshold?",
    choices: [
      "The number of times out of 100 a participant correctly identifies a presented stimulus",
      "The number of times out of 100 a participant detects a change in a stimulus from its original form",
      "The proportion of a stimulus that must be presented for a participant to detect a change",
      "Whether a participant is able to perceive a presented stimulus"
    ],
    correct: 0,
    why: "This explains both how the absolute threshold will be defined and how it will be measured. A good operational definition specifies the procedure for measurement precisely."
  },
  {
    unit: "1",
    concept: "VISION",
    type: "standard",
    prompt: "Rods are to ________ as cones are to ________.",
    choices: [
      "Color vision; peripheral vision",
      "Dim light; color and detail",
      "Fovea; periphery",
      "Daytime vision; nighttime vision"
    ],
    correct: 1,
    why: "Rods (~120 million) detect dim light and are in the periphery. Cones (~6 million) detect color and fine detail and are concentrated in the fovea."
  },
  {
    unit: "1",
    concept: "VISION",
    type: "standard",
    prompt: "Anna's teacher had students hold a card at eye level, close one eye, focus on a plus sign, and slowly move the card closer. The circle on the card disappeared. Which concept was demonstrated?",
    choices: [
      "Dichromatism",
      "Afterimages",
      "Prosopagnosia",
      "The blind spot"
    ],
    correct: 3,
    why: "The blind spot is where the optic nerve exits the eye. There are no photoreceptors (rods or cones) at this location, so when an image falls on this region, it disappears."
  },
  {
    unit: "1",
    concept: "VISION",
    type: "standard",
    prompt: "The opponent-process theory of color vision explains:",
    choices: [
      "Why we have three types of cones",
      "Why we see afterimages in complementary colors",
      "How rods detect motion in dim light",
      "Why color-blind individuals see only in grayscale"
    ],
    correct: 1,
    why: "Opponent-process theory (Hering): color is processed in opposing pairs — red/green, blue/yellow, black/white. When one color fatigues, the opponent color produces an afterimage."
  },
  {
    unit: "1",
    concept: "HEARING",
    type: "standard",
    prompt: "Conduction hearing loss is caused by damage to the:",
    choices: [
      "Auditory nerve",
      "Cochlea's hair cells",
      "Mechanical system that conducts sound to the cochlea (eardrum, ossicles)",
      "Temporal lobe's auditory cortex"
    ],
    correct: 2,
    why: "Conduction hearing loss involves damage to the outer or middle ear structures (eardrum, hammer, anvil, stirrup). Sensorineural loss involves damage to the cochlea's hair cells or auditory nerve."
  },
  {
    unit: "1",
    concept: "PERCEPTION",
    type: "standard",
    prompt: "Gregory was reading outside when a cloud briefly blocked the sun, but he did not perceive the page as changing brightness. This illustrates:",
    choices: [
      "Perceptual set",
      "Binocular cues",
      "Retinal disparity",
      "Perceptual constancy"
    ],
    correct: 3,
    why: "Perceptual constancy allows us to perceive objects as unchanging despite changes in lighting, distance, or angle. Gregory's brain compensated for the change in illumination."
  },
  {
    unit: "1",
    concept: "PERCEPTION",
    type: "standard",
    prompt: "Binocular cues to depth perception include:",
    choices: [
      "Linear perspective and relative size",
      "Retinal disparity and convergence",
      "Texture gradient and interposition",
      "Motion parallax and aerial perspective"
    ],
    correct: 1,
    why: "Binocular cues require both eyes: retinal disparity (slightly different images from each eye) and convergence (inward turning of eyes for nearby objects). All other options are monocular cues."
  },
  {
    unit: "1",
    concept: "PERCEPTION",
    type: "standard",
    prompt: "When Li got an eye infection and had to wear a patch on one eye, they struggled to catch the ball at softball practice. This difficulty is best explained by the loss of:",
    choices: [
      "Convergence only",
      "Retinal disparity",
      "Relative size cues",
      "Linear perspective"
    ],
    correct: 1,
    why: "Retinal disparity requires images from both retinas to judge depth and distance. With one eye patched, Li lost this binocular depth cue, making it harder to judge the ball's position."
  },
  {
    unit: "1",
    concept: "PERCEPTION",
    type: "standard",
    prompt: "Simons and Chabris's famous experiment showed that people focused on counting basketball passes often completely miss a gorilla walking through the scene. This demonstrates:",
    choices: [
      "Change blindness",
      "Inattentional blindness",
      "Sensory adaptation",
      "The phi phenomenon"
    ],
    correct: 1,
    why: "Inattentional blindness: failing to see visible objects when attention is directed elsewhere. Focused attention on one task blinds us to unexpected stimuli — even obvious ones."
  },
  {
    unit: "1",
    concept: "PERCEPTION",
    type: "standard",
    prompt: "Top-down processing is best described as:",
    choices: [
      "Perception driven by raw sensory data from receptors",
      "Perception guided by expectations, experience, and context",
      "The pathway from receptors to the thalamus to the cortex",
      "Sensory transduction at the receptor level"
    ],
    correct: 1,
    why: "Top-down processing uses existing knowledge and expectations to interpret sensory information (reading messy handwriting because you expect certain words). Bottom-up builds from raw data."
  },
  {
    unit: "1",
    concept: "PERCEPTION",
    type: "standard",
    prompt: "The McGurk effect demonstrates that:",
    choices: [
      "Color perception depends on surrounding context",
      "Visual information can override auditory perception of speech",
      "Depth cues from one eye can contradict the other",
      "Memory distorts our perception of past events"
    ],
    correct: 1,
    why: "The McGurk effect: when visual lip movements conflict with auditory speech sounds, you 'hear' a blend. Vision can dominate speech perception."
  },
  {
    unit: "1",
    concept: "PERCEPTION",
    type: "standard",
    prompt: "Which of the following describes a psychological concept that allows a person to reach down and scratch an itch on their ankle while still watching television?",
    choices: [
      "Olfactory sense",
      "Circadian rhythm",
      "The Law of Effect",
      "Kinesthetic sense"
    ],
    correct: 3,
    why: "The kinesthetic (proprioceptive) sense provides awareness of body position and movement, allowing you to locate and move your limbs without looking at them."
  },
  {
    unit: "1",
    concept: "PAIN",
    type: "standard",
    prompt: "Gate-control theory proposes that pain signals can be blocked at the:",
    choices: [
      "Thalamus, by releasing endorphins",
      "Spinal cord, by competing non-pain signals closing a 'gate'",
      "Cerebral cortex, through conscious effort alone",
      "Peripheral nerve endings, by sensory adaptation"
    ],
    correct: 1,
    why: "Melzack & Wall's gate-control theory: a 'gate' in the spinal cord can be closed by non-pain input (rubbing a bumped elbow) and brain signals (distraction, endorphins), reducing pain."
  },
  {
    unit: "1",
    concept: "SENSATION",
    type: "standard",
    prompt: "Sensory adaptation occurs when:",
    choices: [
      "One sense compensates for the loss of another",
      "Sensitivity to an unchanging stimulus decreases over time",
      "Sensory information is processed without conscious awareness",
      "Two senses combine to produce a unified perception"
    ],
    correct: 1,
    why: "Sensory adaptation: prolonged exposure to a constant stimulus reduces sensitivity. You stop noticing background noise or the feeling of clothes on your skin. It frees attention for novel stimuli."
  },

  // ═══════════════════════════════════════════════════════════════
  // UNIT 2 — COGNITION
  // ═══════════════════════════════════════════════════════════════

  {
    unit: "2",
    concept: "MEMORY",
    type: "standard",
    prompt: "According to the Atkinson-Shiffrin model, information flows through memory in this order:",
    choices: [
      "Long-term → short-term → sensory",
      "Sensory → short-term → long-term",
      "Short-term → sensory → long-term",
      "Working memory → procedural → episodic"
    ],
    correct: 1,
    why: "The multi-store model: sensory memory (brief, large capacity) → short-term/working memory (limited, ~30 sec) → long-term memory (potentially unlimited). Information can be lost at each stage."
  },
  {
    unit: "2",
    concept: "WORKING MEMORY",
    type: "standard",
    prompt: "Jackson wants to rearrange his bedroom and envisions potential furniture layouts before settling on a decision. Which component of working memory allows him to manipulate these mental images?",
    choices: [
      "Iconic memory",
      "Visuospatial sketchpad",
      "Implicit memory",
      "Perceptual set"
    ],
    correct: 1,
    why: "The visuospatial sketchpad is a component of working memory (Baddeley's model) where you can manipulate visual and spatial information — like mentally rearranging furniture."
  },
  {
    unit: "2",
    concept: "MEMORY",
    type: "standard",
    prompt: "George Miller's 'magical number' research found that short-term memory can hold approximately:",
    choices: [
      "3 ± 1 items",
      "7 ± 2 items",
      "12 ± 3 items",
      "20 ± 5 items"
    ],
    correct: 1,
    why: "Miller (1956) found STM capacity is about 7 ± 2 chunks. Chunking (grouping items into meaningful units) effectively increases capacity."
  },
  {
    unit: "2",
    concept: "ENCODING",
    type: "standard",
    prompt: "Marie is studying for her biology exam. According to the levels of processing model, which method would be most effective?",
    choices: [
      "Looking at each concept and trying to remember what it looks like",
      "Saying each word out loud and focusing on what it sounds like",
      "Repeating a word over and over again",
      "Trying to apply the concepts to real-life situations"
    ],
    correct: 3,
    why: "Applying concepts to real life illustrates semantic encoding — a deep level of processing. Craik & Lockhart showed deeper (more meaningful) processing leads to better retention than shallow (structural or phonemic) processing."
  },
  {
    unit: "2",
    concept: "ENCODING",
    type: "standard",
    prompt: "When Danilo's teacher introduced a new vocabulary word, he tried to listen to how the word sounded to help remember it. Which type of encoding did Danilo use?",
    choices: [
      "Structural",
      "Automatic processing",
      "Phonemic",
      "Semantic"
    ],
    correct: 2,
    why: "Phonemic (acoustic) encoding involves processing how something sounds. It's an intermediate level of processing — deeper than structural but shallower than semantic."
  },
  {
    unit: "2",
    concept: "MEMORY",
    type: "standard",
    prompt: "The encoding specificity principle suggests that memory retrieval is best when:",
    choices: [
      "Information is rehearsed using distributed practice",
      "The retrieval context matches the encoding context",
      "Information is encoded semantically rather than acoustically",
      "The person uses mnemonic devices"
    ],
    correct: 1,
    why: "Tulving's encoding specificity: cues present during encoding become part of the memory trace. Retrieval improves when conditions match encoding — context-dependent and state-dependent memory."
  },
  {
    unit: "2",
    concept: "MEMORY",
    type: "standard",
    prompt: "Retroactive interference occurs when:",
    choices: [
      "Old memories interfere with learning new information",
      "New learning interferes with the recall of old information",
      "Memories become distorted during retrieval",
      "Information fades from short-term memory due to decay"
    ],
    correct: 1,
    why: "Retroactive interference: NEW learning disrupts OLD memories. (Retro = 'backward.') Proactive interference is the reverse: old memories disrupt new learning."
  },
  {
    unit: "2",
    concept: "MEMORY",
    type: "standard",
    prompt: "Elizabeth Loftus's research on the misinformation effect demonstrates that:",
    choices: [
      "Eyewitness memory is generally accurate and reliable",
      "Memory is reconstructive and can be altered by misleading post-event information",
      "Repressed memories can always be accurately recovered",
      "Short-term memory has unlimited capacity"
    ],
    correct: 1,
    why: "Loftus showed that misleading post-event information alters memories. Asking 'How fast were the cars going when they SMASHED?' produced higher estimates than 'contacted.' Memory is reconstructive, not like a recording."
  },
  {
    unit: "2",
    concept: "MEMORY",
    type: "standard",
    prompt: "Linda prides herself on her memory and never checks her calendar. She missed a doctor's appointment and was certain the office made a mistake. Which concept best explains Linda's failure?",
    choices: [
      "Self-fulfilling prophecy",
      "Change blindness",
      "Hindsight bias",
      "Overconfidence"
    ],
    correct: 3,
    why: "Overconfidence: Linda was more confident in her belief than she was correct. Overconfidence can lead people to rely too heavily on their own judgment without verification."
  },
  {
    unit: "2",
    concept: "MEMORY",
    type: "standard",
    prompt: "The serial position effect predicts that in a list of items, you will best remember:",
    choices: [
      "Items in the middle of the list",
      "Items presented first and last",
      "Only the last few items",
      "Only the first few items"
    ],
    correct: 1,
    why: "The serial position effect: primacy (first items → rehearsed into LTM) and recency (last items → still in STM) produce better recall. Middle items are recalled worst."
  },
  {
    unit: "2",
    concept: "MEMORY",
    type: "standard",
    prompt: "Procedural memory is a type of ________ memory, while episodic memory is a type of ________ memory.",
    choices: [
      "Explicit; implicit",
      "Implicit; explicit",
      "Semantic; sensory",
      "Short-term; long-term"
    ],
    correct: 1,
    why: "Procedural memory (how to ride a bike) is implicit — unconscious, automatic. Episodic memory (your 16th birthday) is explicit/declarative — conscious, verbally described."
  },
  {
    unit: "2",
    concept: "MEMORY",
    type: "standard",
    prompt: "Flashbulb memories are:",
    choices: [
      "Perfectly accurate recordings of emotional events",
      "Vivid, detailed memories of emotionally significant events that feel accurate but can contain errors",
      "Memories that fade completely within 24 hours",
      "Memories stored only in procedural memory"
    ],
    correct: 1,
    why: "Flashbulb memories feel exceptionally vivid but research shows they are NOT more accurate than ordinary memories — they just feel more confident."
  },
  {
    unit: "2",
    concept: "MEMORY",
    type: "standard",
    prompt: "Source amnesia (source misattribution) helps explain why:",
    choices: [
      "People can't remember skills they learned as children",
      "People may remember information but forget where they learned it",
      "Short-term memory has a limited capacity",
      "Semantic memories are more durable than episodic ones"
    ],
    correct: 1,
    why: "Source amnesia: remembering information but not the source. This contributes to false memories — you may 'remember' a fact without realizing it came from a misleading source."
  },
  {
    unit: "2",
    concept: "MEMORY",
    type: "standard",
    prompt: "The spacing effect suggests that studying is most effective when:",
    choices: [
      "All studying is done in one long session",
      "Practice is distributed over time rather than massed in one session",
      "Information is encoded acoustically",
      "The student uses only recognition-based review"
    ],
    correct: 1,
    why: "The spacing effect (distributed practice): spreading study sessions over time produces better long-term retention than cramming. One of the most robust findings in memory research."
  },
  {
    unit: "2",
    concept: "MEMORY",
    type: "EBQ",
    prompt: "Dr. Brownlow randomly assigned participants to two groups: Group 1 took one test on material; Group 2 took the same test three times. Three months later, Group 2 recalled more. Which conclusion is best supported?",
    choices: [
      "Both groups are part of a cross-sectional design",
      "Both groups are convenience samples",
      "Group 1 is the experimental group",
      "Group 2 is the experimental group"
    ],
    correct: 3,
    why: "The experimental group receives the treatment (manipulation). Group 2 received additional testing — the manipulated variable. Group 1 serves as the control for comparison."
  },
  {
    unit: "2",
    concept: "THINKING",
    type: "standard",
    prompt: "The availability heuristic leads people to:",
    choices: [
      "Anchor judgments to an initial piece of information",
      "Judge events as more likely if examples come easily to mind",
      "Make decisions based on how well something matches a prototype",
      "Persist with a losing strategy because of prior investment"
    ],
    correct: 1,
    why: "The availability heuristic: we estimate likelihood based on how easily examples come to mind. After seeing news coverage of plane crashes, people overestimate flying risks."
  },
  {
    unit: "2",
    concept: "THINKING",
    type: "standard",
    prompt: "A psychologist notices that his client, Dan, has an obsession with numbers. The psychologist notices instances where Dan counts atypically but fails to notice normal counting behavior. This illustrates:",
    choices: [
      "Gambler's fallacy",
      "Bottom-up processing",
      "Confirmation bias",
      "Hindsight bias"
    ],
    correct: 2,
    why: "Confirmation bias: we seek, interpret, and remember information that confirms existing beliefs while ignoring contradictory evidence. The psychologist noticed behavior confirming his belief but overlooked disconfirming evidence."
  },
  {
    unit: "2",
    concept: "THINKING",
    type: "standard",
    prompt: "Kelly forgot her safe combination. She started with 0-0-0-0 and tried every possible combination until it opened. This problem-solving strategy is:",
    choices: [
      "A fixed-ratio schedule",
      "The testing effect",
      "Functional fixedness",
      "An algorithm"
    ],
    correct: 3,
    why: "Algorithms are step-by-step procedures that guarantee a solution — like trying every combination on a lock. Slower than heuristics but always works."
  },
  {
    unit: "2",
    concept: "THINKING",
    type: "standard",
    prompt: "The representativeness heuristic leads people to:",
    choices: [
      "Judge the likelihood of an event based on how easily examples come to mind",
      "Judge category membership based on how similar something is to a prototype",
      "Make decisions by anchoring to an initial value",
      "Overvalue information that confirms their beliefs"
    ],
    correct: 1,
    why: "The representativeness heuristic: judging probability by prototype match. 'Steve is shy, organized — is he a librarian or salesperson?' People ignore base rates and go with the stereotype match."
  },
  {
    unit: "2",
    concept: "THINKING",
    type: "standard",
    prompt: "Functional fixedness is the tendency to:",
    choices: [
      "See only the traditional use of an object, preventing creative problem-solving",
      "Persist with a strategy that worked before",
      "Overestimate one's ability to solve novel problems",
      "Focus on surface features rather than deep structure"
    ],
    correct: 0,
    why: "Functional fixedness limits seeing an object only in its usual function. You need to tighten a screw but can't think to use a coin because you're 'fixed' on needing a screwdriver."
  },
  {
    unit: "2",
    concept: "THINKING",
    type: "standard",
    prompt: "The framing effect demonstrates that:",
    choices: [
      "People's decisions are influenced by how choices are presented",
      "People prefer certain gains over uncertain ones",
      "Previous experience blocks creative solutions",
      "People anchor on the first piece of information they receive"
    ],
    correct: 0,
    why: "The framing effect (Tversky & Kahneman): wording changes decisions. '90% survival rate' sounds better than '10% mortality rate' — even though they're identical."
  },
  {
    unit: "2",
    concept: "THINKING",
    type: "standard",
    prompt: "The sunk cost fallacy is illustrated when a person:",
    choices: [
      "Judges likelihood by how easily examples come to mind",
      "Refuses to sell tickets because of the time already invested waiting in line",
      "Overestimates the accuracy of their predictions after learning the outcome",
      "Bases decisions on how similar something is to a prototype"
    ],
    correct: 1,
    why: "The sunk cost fallacy: continuing to invest because of previously spent resources that cannot be recovered. Rational decisions should be based on future costs and benefits."
  },
  {
    unit: "2",
    concept: "THINKING",
    type: "standard",
    prompt: "Erik, a student with poor grades, meets his counselor who suggests brainstorming different strategies. The counselor's suggestion reflects:",
    choices: [
      "Divergent thinking",
      "Assimilation",
      "Phonemic processing",
      "Rationalization"
    ],
    correct: 0,
    why: "Divergent thinking involves generating multiple possible solutions to a problem. It contrasts with convergent thinking, which narrows options to find a single best answer."
  },
  {
    unit: "2",
    concept: "THINKING",
    type: "standard",
    prompt: "After taking a break from a difficult calculus problem, Cassius returned and solved it easily. This illustrates:",
    choices: [
      "Insight learning",
      "Habituation",
      "Latent learning",
      "Shaping"
    ],
    correct: 0,
    why: "Insight learning occurs when a solution appears suddenly, often after a period of incubation. The 'aha!' moment comes without trial-and-error or direct reinforcement."
  },
  {
    unit: "2",
    concept: "LANGUAGE",
    type: "standard",
    prompt: "Chomsky argued that humans are born with an innate capacity for language acquisition, which he called the:",
    choices: [
      "Critical period",
      "Language acquisition device (LAD)",
      "Linguistic relativity hypothesis",
      "Broca's module"
    ],
    correct: 1,
    why: "Chomsky proposed the LAD — an innate brain mechanism for language acquisition. The speed and uniformity of language learning across cultures cannot be explained by reinforcement alone."
  },
  {
    unit: "2",
    concept: "LANGUAGE",
    type: "standard",
    prompt: "A child says 'I runned really fast during the game today!' This best reflects:",
    choices: [
      "Semantics",
      "Telegraphic speech",
      "Syntax",
      "Overgeneralization"
    ],
    correct: 3,
    why: "Overgeneralization: incorrectly extending a grammatical rule beyond where it applies. The child applies the regular past-tense '-ed' rule to the irregular verb 'run.'"
  },
  {
    unit: "2",
    concept: "LANGUAGE",
    type: "standard",
    prompt: "The linguistic relativity hypothesis (Sapir-Whorf) suggests that:",
    choices: [
      "All languages share the same deep structure",
      "Language influences how we think and perceive the world",
      "Children learn language primarily through reinforcement",
      "Language ability depends entirely on Broca's area"
    ],
    correct: 1,
    why: "The Sapir-Whorf hypothesis: language shapes thought and perception. The weaker (more accepted) version says language influences but doesn't determine thought."
  },
  {
    unit: "2",
    concept: "INTELLIGENCE",
    type: "standard",
    prompt: "Howard Gardner's theory of multiple intelligences proposes that intelligence:",
    choices: [
      "Is a single, general ability measured by IQ",
      "Consists of several relatively independent domains",
      "Is entirely determined by genetics",
      "Can only be measured through standardized testing"
    ],
    correct: 1,
    why: "Gardner proposed 8+ distinct intelligences (linguistic, logical-mathematical, spatial, musical, bodily-kinesthetic, interpersonal, intrapersonal, naturalist). Critics note weak empirical support."
  },
  {
    unit: "2",
    concept: "INTELLIGENCE",
    type: "standard",
    prompt: "The Flynn effect refers to:",
    choices: [
      "The decline in IQ scores over the past century",
      "The steady rise in average IQ scores over successive generations",
      "The tendency for identical twins to have similar IQ scores",
      "The bias in IQ tests against minority groups"
    ],
    correct: 1,
    why: "The Flynn effect: average IQ scores have risen about 3 points per decade throughout the 20th century. Likely causes include better nutrition, education, and environmental stimulation."
  },
  {
    unit: "2",
    concept: "INTELLIGENCE",
    type: "EBQ",
    prompt: "Researchers surveyed 8th graders about whether they believe intelligence is fixed or malleable, then tested them again in 12th grade. Which variable of interest is this study measuring?",
    choices: [
      "A fixed or malleable mindset",
      "Genetic differences",
      "Self-esteem",
      "An external locus of control"
    ],
    correct: 0,
    why: "The survey measures growth mindset — the belief that intelligence is malleable versus fixed. This is the variable of interest being operationally defined by survey responses."
  },
  {
    unit: "2",
    concept: "TESTING",
    type: "EBQ",
    prompt: "Dr. May administers a new test, calculates mean scores for odd-numbered and even-numbered questions separately, and compares them. She is measuring:",
    choices: [
      "Standard deviation",
      "Predictive validity",
      "Intelligence quotient",
      "Reliability"
    ],
    correct: 3,
    why: "Dr. May is conducting a split-half reliability study — checking whether the test yields consistent results across its two halves. Reliability is about consistency of measurement."
  },
  {
    unit: "2",
    concept: "TESTING",
    type: "EBQ",
    prompt: "A college tracked students' aptitude test scores and later job success. Students with higher aptitude scores tended to have higher job success ratings. This suggests the test has high:",
    choices: [
      "Content validity",
      "Test-retest reliability",
      "Predictive validity",
      "Standardization"
    ],
    correct: 2,
    why: "Predictive validity: the test successfully predicted a future outcome (job success). The correlation between test scores and later performance indicates the test measures something meaningful."
  },
  {
    unit: "2",
    concept: "MEMORY",
    type: "standard",
    prompt: "Elaborative rehearsal is more effective than maintenance rehearsal because it:",
    choices: [
      "Involves simply repeating information over and over",
      "Connects new information to existing knowledge and meaning",
      "Uses acoustic coding rather than semantic coding",
      "Requires less cognitive effort"
    ],
    correct: 1,
    why: "Elaborative rehearsal processes information deeply by connecting it to meaning and existing knowledge (semantic encoding). Simple repetition (maintenance rehearsal) keeps info in STM but doesn't transfer well to LTM."
  },

  // ═══════════════════════════════════════════════════════════════
  // UNIT 3 — DEVELOPMENT AND LEARNING
  // ═══════════════════════════════════════════════════════════════

  {
    unit: "3",
    concept: "PIAGET",
    type: "standard",
    prompt: "When Theodore's dad hides his favorite toy behind his back, Theodore stops looking for it, as if it never existed. Which Piagetian stage is Theodore in?",
    choices: [
      "Sensorimotor",
      "Preoperational",
      "Concrete operational",
      "Formal operational"
    ],
    correct: 0,
    why: "Theodore lacks object permanence — understanding that objects continue to exist when hidden. This develops around 8 months during the sensorimotor stage (birth-2 years)."
  },
  {
    unit: "3",
    concept: "PIAGET",
    type: "standard",
    prompt: "A child who understands that pouring water from a tall glass into a wide glass does not change the amount has achieved:",
    choices: [
      "Object permanence",
      "Conservation",
      "Egocentrism",
      "Abstract reasoning"
    ],
    correct: 1,
    why: "Conservation — understanding quantity stays the same despite appearance changes — is a hallmark of the concrete operational stage (7-11). Preoperational children fail because they focus on one dimension."
  },
  {
    unit: "3",
    concept: "PIAGET",
    type: "standard",
    prompt: "Egocentrism in the preoperational stage means that:",
    choices: [
      "The child is selfish and thinks only of their own needs",
      "The child has difficulty taking another person's perspective",
      "The child cannot form mental representations",
      "The child believes all objects are alive"
    ],
    correct: 1,
    why: "Piaget's egocentrism doesn't mean selfishness — it means the child literally cannot see the world from someone else's viewpoint. The 'three mountains task' demonstrates this."
  },
  {
    unit: "3",
    concept: "PIAGET",
    type: "standard",
    prompt: "A teenager who can systematically test hypotheses and think about abstract possibilities is in Piaget's:",
    choices: [
      "Sensorimotor stage",
      "Preoperational stage",
      "Concrete operational stage",
      "Formal operational stage"
    ],
    correct: 3,
    why: "The formal operational stage (12+) involves abstract, hypothetical, and systematic thinking — reasoning about 'what if' scenarios, deductive logic, and metacognition."
  },
  {
    unit: "3",
    concept: "VYGOTSKY",
    type: "standard",
    prompt: "Vygotsky's zone of proximal development (ZPD) describes:",
    choices: [
      "The gap between what a child can do alone and with guidance",
      "The age at which children achieve conservation",
      "The critical period for language acquisition",
      "The gap between sensorimotor and preoperational thinking"
    ],
    correct: 0,
    why: "Vygotsky's ZPD is the distance between what a child can do independently and what they can achieve with scaffolding from a more skilled person. Learning is most effective in this zone."
  },
  {
    unit: "3",
    concept: "ATTACHMENT",
    type: "standard",
    prompt: "In Ainsworth's Strange Situation, a securely attached infant will:",
    choices: [
      "Show no distress when the caregiver leaves and ignore them upon return",
      "Explore freely when the caregiver is present and seek comfort upon their return",
      "Cling to the caregiver and refuse to explore",
      "Show a mix of clinging and anger when the caregiver returns"
    ],
    correct: 1,
    why: "Securely attached infants use the caregiver as a secure base for exploration, show distress at separation, and are comforted upon reunion. About 60-65% of infants show this pattern."
  },
  {
    unit: "3",
    concept: "ATTACHMENT",
    type: "EBQ",
    prompt: "A researcher measures emotional instability in children by attachment style. The group with the lowest instability scores is most likely which attachment style?",
    choices: [
      "Avoidant",
      "Anxious",
      "Secure",
      "Disorganized"
    ],
    correct: 2,
    why: "Secure attachment is associated with lower levels of anxiety, anger, and depression. Children with secure attachment have more stable emotional regulation."
  },
  {
    unit: "3",
    concept: "ATTACHMENT",
    type: "standard",
    prompt: "Harlow's research with infant monkeys demonstrated that:",
    choices: [
      "Attachment is primarily based on feeding",
      "Contact comfort is more important than feeding for attachment",
      "Monkeys cannot form attachments to inanimate objects",
      "Attachment only occurs during the first week of life"
    ],
    correct: 1,
    why: "Harlow's monkeys overwhelmingly preferred the soft cloth 'mother' (even when wire mother provided milk), demonstrating that contact comfort — not feeding — is the primary basis for attachment."
  },
  {
    unit: "3",
    concept: "ERIKSON",
    type: "standard",
    prompt: "According to Erikson, the primary psychosocial crisis of adolescence is:",
    choices: [
      "Trust vs. mistrust",
      "Industry vs. inferiority",
      "Identity vs. role confusion",
      "Intimacy vs. isolation"
    ],
    correct: 2,
    why: "Erikson's 5th stage: teens explore different roles, values, and identities. Successfully resolving this stage produces a coherent sense of self. Failure leads to role confusion."
  },
  {
    unit: "3",
    concept: "ERIKSON",
    type: "standard",
    prompt: "According to Erikson, middle adulthood is defined by the crisis of:",
    choices: [
      "Identity vs. role confusion",
      "Intimacy vs. isolation",
      "Generativity vs. stagnation",
      "Integrity vs. despair"
    ],
    correct: 2,
    why: "Generativity vs. stagnation (~40-65): the desire to contribute to the next generation through parenting, mentoring, or creative work. Failure leads to feeling unproductive."
  },
  {
    unit: "3",
    concept: "KOHLBERG",
    type: "standard",
    prompt: "A person who avoids stealing because 'it's against the law and laws maintain social order' is reasoning at Kohlberg's:",
    choices: [
      "Preconventional level",
      "Conventional level",
      "Postconventional level",
      "Autonomous level"
    ],
    correct: 1,
    why: "Conventional moral reasoning focuses on following rules and social expectations. Stage 4 emphasizes 'law and order.' Preconventional focuses on self-interest; postconventional on universal principles."
  },
  {
    unit: "3",
    concept: "KOHLBERG",
    type: "standard",
    prompt: "At the postconventional level of Kohlberg's theory, moral reasoning is based on:",
    choices: [
      "Avoiding punishment and seeking rewards",
      "Following rules to gain social approval",
      "Abstract ethical principles and individual rights",
      "Obeying authority to maintain social order"
    ],
    correct: 2,
    why: "Postconventional reasoning (Stages 5-6) involves universal ethical principles and individual rights — sometimes even when they conflict with laws. Few people consistently reason at this level."
  },
  {
    unit: "3",
    concept: "PRENATAL",
    type: "standard",
    prompt: "Teratogens are substances that:",
    choices: [
      "Promote healthy fetal development",
      "Can cause birth defects when a mother is exposed during pregnancy",
      "Are passed only through genetic inheritance",
      "Only affect development during the third trimester"
    ],
    correct: 1,
    why: "Teratogens include alcohol (fetal alcohol spectrum disorders), drugs, viruses, and chemicals that can harm the developing embryo/fetus. Effects depend on dose, timing, and genetic vulnerability."
  },
  {
    unit: "3",
    concept: "DEVELOPMENT",
    type: "standard",
    prompt: "Temperament, which appears in infancy, refers to:",
    choices: [
      "Intelligence level at birth",
      "A person's characteristic emotional reactivity and intensity",
      "The attachment style formed with the primary caregiver",
      "Cognitive development during the sensorimotor stage"
    ],
    correct: 1,
    why: "Temperament is biologically-based emotional style visible from birth. Thomas & Chess identified three types: easy (40%), difficult (10%), and slow-to-warm-up (15%)."
  },
  {
    unit: "3",
    concept: "DEVELOPMENT",
    type: "standard",
    prompt: "A critical period in development refers to:",
    choices: [
      "A time when any type of learning is equally possible",
      "A specific time window during which certain experiences must occur for normal development",
      "The period of most rapid physical growth",
      "The stage when abstract thinking first emerges"
    ],
    correct: 1,
    why: "Critical periods are time-limited windows when specific experiences are necessary for normal development (imprinting in birds, language acquisition before puberty). Missing the window can have lasting effects."
  },
  {
    unit: "3",
    concept: "DEVELOPMENT",
    type: "standard",
    prompt: "Authoritative parenting, associated with the best child outcomes, is characterized by:",
    choices: [
      "High demands and low responsiveness",
      "High demands and high responsiveness",
      "Low demands and high responsiveness",
      "Low demands and low responsiveness"
    ],
    correct: 1,
    why: "Baumrind's styles: Authoritative = demanding AND responsive (rules with warmth). Authoritarian = demanding but cold. Permissive = responsive but no rules. Neglectful = neither."
  },
  {
    unit: "3",
    concept: "DEVELOPMENT",
    type: "AAQ",
    prompt: "Jonah (Country X) and Micah (Country Y) are both two-year-olds who point at their juice cups. Jonah's caregiver views pointing as offensive; Micah's sees it as normal. Which is most likely true?",
    choices: [
      "Jonah's caregiver is using hindsight bias",
      "Because of the cultural norms of Country X, Jonah's caregiver will likely teach Jonah not to point",
      "Micah's caregiver is influenced by groupthink",
      "Social facilitation is affecting both caregivers"
    ],
    correct: 1,
    why: "Cultural norms define expectations and roles for society members. Both children reached the same developmental milestone, but cultural context shapes how the behavior is interpreted and shaped."
  },
  {
    unit: "3",
    concept: "CLASSICAL CONDITIONING",
    type: "standard",
    prompt: "In Pavlov's original experiment, the bell is the:",
    choices: [
      "Unconditioned stimulus",
      "Conditioned stimulus",
      "Unconditioned response",
      "Conditioned response"
    ],
    correct: 1,
    why: "The bell started as a neutral stimulus and became the conditioned stimulus (CS) after pairing with food (UCS). The CS eventually triggers salivation (CR) on its own."
  },
  {
    unit: "3",
    concept: "CLASSICAL CONDITIONING",
    type: "standard",
    prompt: "Which of the following is an example of a conditioned response?",
    choices: [
      "Shivering in cold weather",
      "Salivating when simply seeing food",
      "Getting up to answer a doorbell",
      "Reflexively moving away from a hot stove"
    ],
    correct: 1,
    why: "Salivating when merely seeing food is a learned response. Salivation happens reflexively when eating, but when seeing food is repeatedly paired with eating, seeing food alone produces salivation — a conditioned response."
  },
  {
    unit: "3",
    concept: "CLASSICAL CONDITIONING",
    type: "standard",
    prompt: "Wilson feels afraid each time he sees any dentist — even one on television — after painful treatments. This illustrates:",
    choices: [
      "Stimulus discrimination",
      "Stimulus generalization",
      "Habituation",
      "Extinction"
    ],
    correct: 1,
    why: "Wilson's fear generalized from his specific dentist to ALL dentists. Stimulus generalization: responding to stimuli similar to the original CS."
  },
  {
    unit: "3",
    concept: "CLASSICAL CONDITIONING",
    type: "standard",
    prompt: "Loreli trained her cat not to chase mice, but the cat sometimes still chases them. This is best explained by:",
    choices: [
      "Instinctive drift",
      "Counterconditioning",
      "Stimulus generalization",
      "Stimulus discrimination"
    ],
    correct: 0,
    why: "Instinctive drift: animals revert to innate, biologically predisposed behaviors despite conditioning. The cat's natural hunting instincts override the learned behavior."
  },
  {
    unit: "3",
    concept: "CLASSICAL CONDITIONING",
    type: "standard",
    prompt: "Garcia and Koelling's research on taste aversion demonstrated that:",
    choices: [
      "Any neutral stimulus can be paired with any unconditioned stimulus",
      "Organisms are biologically prepared to associate certain stimuli more easily",
      "Taste aversions require many pairings to develop",
      "Classical conditioning cannot occur without conscious awareness"
    ],
    correct: 1,
    why: "Garcia showed rats easily associate taste with nausea (even with a long delay) but NOT with shock. This biological preparedness challenged the idea that any CS-UCS pairing works equally well."
  },
  {
    unit: "3",
    concept: "CLASSICAL CONDITIONING",
    type: "standard",
    prompt: "Spontaneous recovery refers to:",
    choices: [
      "Strengthening a conditioned response with continued pairing",
      "The reappearance of an extinguished conditioned response after a rest period",
      "Responding to stimuli similar to the original CS",
      "The initial learning of a stimulus-response association"
    ],
    correct: 1,
    why: "After extinction, the CR can spontaneously reappear after a rest period — usually weaker. This shows extinction is not complete 'unlearning.'"
  },
  {
    unit: "3",
    concept: "OPERANT CONDITIONING",
    type: "standard",
    prompt: "Negative reinforcement increases behavior by:",
    choices: [
      "Presenting an unpleasant stimulus after the behavior",
      "Removing an aversive stimulus when the behavior occurs",
      "Withholding a pleasant stimulus after the behavior",
      "Punishing a competing behavior"
    ],
    correct: 1,
    why: "Negative reinforcement = removing something unpleasant to INCREASE behavior. ALL reinforcement (positive and negative) INCREASES behavior. Example: aspirin removes a headache, reinforcing aspirin-taking."
  },
  {
    unit: "3",
    concept: "OPERANT CONDITIONING",
    type: "standard",
    prompt: "Macy didn't have to mop the floors the week she brought home straight A's. This illustrates:",
    choices: [
      "Positive reinforcement",
      "Negative reinforcement",
      "Positive punishment",
      "Negative punishment"
    ],
    correct: 1,
    why: "Removing an aversive stimulus (mopping floors) increases the likelihood of the target behavior (earning high grades). Negative = removing; reinforcement = behavior increases."
  },
  {
    unit: "3",
    concept: "OPERANT CONDITIONING",
    type: "standard",
    prompt: "A slot machine pays out after an unpredictable number of plays. This is a:",
    choices: [
      "Fixed-ratio schedule",
      "Variable-ratio schedule",
      "Fixed-interval schedule",
      "Variable-interval schedule"
    ],
    correct: 1,
    why: "Variable-ratio (VR) schedules reinforce after unpredictable numbers of responses. They produce the highest, most extinction-resistant response rates — the engine of slot machines and this very app."
  },
  {
    unit: "3",
    concept: "OPERANT CONDITIONING",
    type: "standard",
    prompt: "Shaping is a procedure in which:",
    choices: [
      "A behavior is reinforced every single time it occurs",
      "Successive approximations toward a target behavior are reinforced",
      "An organism learns by watching a model",
      "A stimulus is gradually introduced to reduce anxiety"
    ],
    correct: 1,
    why: "Shaping reinforces behaviors that come progressively closer to the desired target. Skinner used shaping to teach pigeons complex behaviors by rewarding each small step."
  },
  {
    unit: "3",
    concept: "OPERANT CONDITIONING",
    type: "standard",
    prompt: "A child's tantrum is accidentally reinforced when the parent gives in and buys a toy. The parent is also reinforced because the tantrum stops. This is an example of:",
    choices: [
      "Positive punishment for both",
      "Negative reinforcement for the child; negative reinforcement for the parent",
      "Classical conditioning",
      "Observational learning"
    ],
    correct: 1,
    why: "The child gets the toy (positive reinforcement). The parent escapes the aversive tantrum (negative reinforcement). Both are reinforced for undesirable patterns — a 'reinforcement trap.'"
  },
  {
    unit: "3",
    concept: "OPERANT CONDITIONING",
    type: "standard",
    prompt: "Learned helplessness (Seligman) occurs when an organism:",
    choices: [
      "Learns a new behavior through shaping",
      "Stops trying to escape aversive events after repeated failure to control them",
      "Generalizes a response from one situation to another",
      "Is reinforced on a variable schedule"
    ],
    correct: 1,
    why: "Seligman's dogs, unable to escape shocks, later failed to escape even when possible. Learned helplessness — believing one's actions don't matter — is a model for understanding depression."
  },
  {
    unit: "3",
    concept: "OPERANT CONDITIONING",
    type: "AAQ",
    prompt: "Which hypothesis would most likely be evaluated by a behavioral psychologist?",
    choices: [
      "A woman who recently went through a divorce will use sublimation as a defense mechanism",
      "A rat receiving a treat every time it presses a lever will eventually stop doing so without treats",
      "A child forced to play piano is less likely to achieve self-actualization",
      "An adult with chronic childhood illness is more likely to develop dependent personality disorder"
    ],
    correct: 1,
    why: "The behavioral perspective evolved from learning via conditioning. Predicting that a rat will stop pressing a lever without reinforcement (extinction) is a classic operant conditioning hypothesis."
  },
  {
    unit: "3",
    concept: "OPERANT CONDITIONING",
    type: "standard",
    prompt: "Mr. Latture implemented a token economy for students with ADHD. Students earned tokens for staying on task and exchanged them for rewards. Token economies are based on:",
    choices: [
      "Classical conditioning",
      "Operant conditioning",
      "Psychoanalytic theory",
      "Humanistic psychology"
    ],
    correct: 1,
    why: "Token economies use operant conditioning: tokens (secondary reinforcers) are earned for desired behaviors and exchanged for goods/privileges (primary reinforcers). This shapes behavior through positive reinforcement."
  },
  {
    unit: "3",
    concept: "OPERANT CONDITIONING",
    type: "standard",
    prompt: "Latent learning, demonstrated by Tolman's rats, suggests that:",
    choices: [
      "Learning always requires reinforcement",
      "Learning can occur without reinforcement and may not show until motivation appears",
      "Classical conditioning is superior to operant conditioning",
      "Animals cannot form cognitive maps"
    ],
    correct: 1,
    why: "Tolman's rats explored a maze without reward and showed no improvement — until food was introduced, then they immediately matched always-rewarded rats. They had learned (formed a cognitive map) without demonstrating it."
  },
  {
    unit: "3",
    concept: "OBSERVATIONAL LEARNING",
    type: "standard",
    prompt: "Bandura's Bobo doll experiment demonstrated that:",
    choices: [
      "Children only imitate when directly reinforced",
      "Children learn aggressive behaviors through observation without direct reinforcement",
      "Classical conditioning explains aggression",
      "Punishment is more effective than reinforcement"
    ],
    correct: 1,
    why: "Bandura (1961): children who watched an adult attack a Bobo doll imitated the aggression without receiving any reinforcement themselves — demonstrating observational (social) learning."
  },
  {
    unit: "3",
    concept: "OBSERVATIONAL LEARNING",
    type: "standard",
    prompt: "Maisie saw her friend McKeller reprimanded for putting his head down in class, so she decided not to put her head down. This is:",
    choices: [
      "Vicarious conditioning",
      "Self-determination theory",
      "Classical conditioning",
      "Operant conditioning"
    ],
    correct: 0,
    why: "Vicarious conditioning: learning from observing consequences that happen to others. Maisie learned without personal experience with the consequence."
  },

  // ═══════════════════════════════════════════════════════════════
  // UNIT 4 — SOCIAL PSYCHOLOGY AND PERSONALITY
  // ═══════════════════════════════════════════════════════════════

  {
    unit: "4",
    concept: "ATTRIBUTION",
    type: "standard",
    prompt: "The fundamental attribution error is the tendency to:",
    choices: [
      "Attribute one's own behavior to situational factors",
      "Overestimate dispositional factors and underestimate situational factors when explaining others' behavior",
      "Blame others for one's own failures",
      "Attribute group outcomes to the leader's personality"
    ],
    correct: 1,
    why: "The FAE: we overweight personality and underweight situations when explaining others' behavior. 'He's late because he's irresponsible' rather than 'maybe traffic was bad.'"
  },
  {
    unit: "4",
    concept: "ATTRIBUTION",
    type: "standard",
    prompt: "Paula notices that her normally polite friend Justine is irritable only in English class. Paula would most likely explain Justine's behavior using:",
    choices: [
      "A self-fulfilling prophecy",
      "Self-serving bias",
      "A situational attribution",
      "Deindividuation"
    ],
    correct: 2,
    why: "Because Justine is generally kind but only irritable in one class, Paula attributes the behavior to something about that environment — a situational attribution, which acknowledges external factors."
  },
  {
    unit: "4",
    concept: "ATTRIBUTION",
    type: "standard",
    prompt: "The self-serving bias is the tendency to:",
    choices: [
      "Attribute others' successes to luck",
      "Attribute our successes to internal factors and our failures to external factors",
      "Believe we would have predicted an event after it occurred",
      "Judge others more harshly than ourselves"
    ],
    correct: 1,
    why: "Self-serving bias: 'I aced the test because I'm smart' but 'I failed because the test was unfair.' It protects self-esteem."
  },
  {
    unit: "4",
    concept: "CONFORMITY",
    type: "standard",
    prompt: "Asch's line experiments demonstrated that:",
    choices: [
      "People only conform when physically threatened",
      "People conform to group opinions even when the group is obviously wrong",
      "Conformity only occurs in ambiguous situations",
      "People never conform if confident in their judgment"
    ],
    correct: 1,
    why: "Asch (1951): ~75% of participants conformed at least once when confederates gave obviously wrong answers about line lengths. Even clear perceptual judgments are susceptible to social pressure."
  },
  {
    unit: "4",
    concept: "CONFORMITY",
    type: "standard",
    prompt: "Normative social influence leads to conformity because people want to:",
    choices: [
      "Be correct in ambiguous situations",
      "Gain social acceptance and avoid rejection",
      "Reduce cognitive dissonance",
      "Follow an authority figure's commands"
    ],
    correct: 1,
    why: "Normative influence: conforming to be liked and accepted. Informational influence: conforming because we believe others have useful information (wanting to be correct)."
  },
  {
    unit: "4",
    concept: "OBEDIENCE",
    type: "standard",
    prompt: "In Milgram's obedience study, approximately what percentage of participants administered the maximum 450-volt shock?",
    choices: [
      "10%",
      "35%",
      "65%",
      "90%"
    ],
    correct: 2,
    why: "65% went to 450 volts despite hearing the learner scream and go silent. Milgram demonstrated the power of authority to override personal morality."
  },
  {
    unit: "4",
    concept: "GROUP BEHAVIOR",
    type: "standard",
    prompt: "Social loafing is the tendency to:",
    choices: [
      "Perform better on simple tasks when others are present",
      "Exert less effort when working in a group than alone",
      "Lose self-awareness in group situations",
      "Shift toward extreme positions after group discussion"
    ],
    correct: 1,
    why: "Social loafing: individual effort decreases in groups because accountability is diffused. People clap and shout less loudly in groups than alone."
  },
  {
    unit: "4",
    concept: "GROUP BEHAVIOR",
    type: "standard",
    prompt: "Deindividuation occurs when:",
    choices: [
      "Performance improves due to others' presence",
      "People lose self-awareness in group situations, leading to impulsive behavior",
      "A group reaches a more extreme position",
      "An individual changes behavior to match group norms"
    ],
    correct: 1,
    why: "Deindividuation: anonymity + group arousal → reduced self-awareness → impulsive, sometimes antisocial behavior. Examples: mob behavior, online trolling."
  },
  {
    unit: "4",
    concept: "GROUP BEHAVIOR",
    type: "standard",
    prompt: "Group polarization refers to the tendency for:",
    choices: [
      "Groups to become internally divided",
      "Group discussion to strengthen the average initial position of members",
      "Groups to avoid conflict by seeking consensus",
      "Individual opinions to moderate after discussion"
    ],
    correct: 1,
    why: "Group polarization: after discussion, groups make more extreme decisions than individuals initially favored. If a group leans slightly toward risk, discussion pushes it further."
  },
  {
    unit: "4",
    concept: "GROUP BEHAVIOR",
    type: "standard",
    prompt: "Groupthink is most likely when:",
    choices: [
      "Members are encouraged to voice dissent",
      "The group is cohesive, insulated from outside opinions, and has a directive leader",
      "Members have diverse backgrounds",
      "The group carefully evaluates all alternatives"
    ],
    correct: 1,
    why: "Janis: groupthink occurs in highly cohesive groups with strong leaders, insulation from outside info, and pressure for conformity. Members self-censor dissent."
  },
  {
    unit: "4",
    concept: "SOCIAL INFLUENCE",
    type: "standard",
    prompt: "A streaming service promotes a song by showing it on the home page different numbers of times. Subscribers who saw it more often rated it more favorably. This illustrates:",
    choices: [
      "Self-fulfilling prophecy",
      "Foot-in-the-door technique",
      "The mere exposure effect",
      "Social facilitation"
    ],
    correct: 2,
    why: "The mere exposure effect: repeated exposure increases liking — even without conscious awareness. More presentations → higher popularity ratings."
  },
  {
    unit: "4",
    concept: "SOCIAL INFLUENCE",
    type: "standard",
    prompt: "The foot-in-the-door technique works by:",
    choices: [
      "Starting with a large request, then retreating to a smaller one",
      "Starting with a small request to increase compliance with a larger later request",
      "Presenting the actual cost only after commitment is made",
      "Using authority figures to pressure compliance"
    ],
    correct: 1,
    why: "Foot-in-the-door: agree to a small request → more likely to agree to a larger one later. Based on self-perception and consistency."
  },
  {
    unit: "4",
    concept: "SOCIAL INFLUENCE",
    type: "standard",
    prompt: "Social facilitation theory predicts that others' presence will:",
    choices: [
      "Always improve performance",
      "Always impair performance",
      "Improve performance on simple tasks but impair it on complex tasks",
      "Have no effect on performance"
    ],
    correct: 2,
    why: "Zajonc: others' presence increases arousal, which strengthens the dominant response. Simple/well-learned tasks improve; complex/new tasks suffer."
  },
  {
    unit: "4",
    concept: "SOCIAL INFLUENCE",
    type: "EBQ",
    prompt: "Dr. Reyes found that sports teams win more home games than away games across three different sports. Which concept is she most likely studying?",
    choices: [
      "Basketball is more enjoyable than football",
      "Uniforms affect whether teams win",
      "Sports with more games regress to the mean in wins",
      "The presence of a friendly crowd improves a team's chance of winning"
    ],
    correct: 3,
    why: "Dr. Reyes is studying social facilitation — whether a supportive audience improves team performance. The home-field advantage aligns with this hypothesis."
  },
  {
    unit: "4",
    concept: "ATTITUDES",
    type: "standard",
    prompt: "Cognitive dissonance theory predicts that when behavior contradicts attitudes, people will:",
    choices: [
      "Always change their behavior to match attitudes",
      "Experience discomfort and often change attitudes to match behavior",
      "Ignore the inconsistency",
      "Seek others with the same inconsistency"
    ],
    correct: 1,
    why: "Cognitive dissonance: the discomfort of contradictory beliefs/behaviors motivates attitude change. People paid $1 to lie rated a task as more enjoyable than those paid $20 (insufficient justification)."
  },
  {
    unit: "4",
    concept: "ATTITUDES",
    type: "AAQ",
    prompt: "According to cognitive dissonance theory, the LEAST external justification for a behavior leads to:",
    choices: [
      "The least attitude change",
      "The greatest attitude change",
      "No attitude change",
      "Increased behavior without attitude change"
    ],
    correct: 1,
    why: "Less external justification → more dissonance → more attitude change. If paid $1 to lie (insufficient justification), you change your attitude to reduce dissonance. $20 provides sufficient justification — no need to change."
  },
  {
    unit: "4",
    concept: "ATTITUDES",
    type: "standard",
    prompt: "The peripheral route of persuasion (ELM) relies on:",
    choices: [
      "Strong, logical arguments and evidence",
      "Surface cues like attractiveness, celebrity endorsement, or emotional appeals",
      "Deep processing of message content",
      "The audience's existing expertise"
    ],
    correct: 1,
    why: "The ELM: peripheral route uses superficial cues when motivation/ability to process is low. Central route uses strong arguments when the audience is engaged and thinking carefully."
  },
  {
    unit: "4",
    concept: "ATTITUDES",
    type: "standard",
    prompt: "Aubree smiles at customers her age but rarely at older customers, without realizing it. This best reflects:",
    choices: [
      "Informational social influence",
      "Implicit attitudes",
      "Stereotype threat",
      "Diffusion of responsibility"
    ],
    correct: 1,
    why: "Implicit attitudes are those individuals hold but may be unaware of. Aubree's differential treatment of older customers reflects an implicit attitude she doesn't consciously recognize."
  },
  {
    unit: "4",
    concept: "PROSOCIAL",
    type: "standard",
    prompt: "The bystander effect predicts that helping decreases when:",
    choices: [
      "The victim is in the helper's in-group",
      "More bystanders are present",
      "The situation is clearly an emergency",
      "The helper recently performed a kind act"
    ],
    correct: 1,
    why: "Darley & Latané: more bystanders → less likely any individual helps. Diffusion of responsibility and pluralistic ignorance drive the effect."
  },
  {
    unit: "4",
    concept: "PREJUDICE",
    type: "standard",
    prompt: "In-group bias is the tendency to:",
    choices: [
      "Treat all groups equally",
      "Favor members of one's own group over other groups",
      "Attribute out-group successes to luck",
      "Assume all members of another group are the same"
    ],
    correct: 1,
    why: "In-group bias: we favor our own groups. Tajfel's minimal group studies showed this emerges even with arbitrary group assignments."
  },
  {
    unit: "4",
    concept: "PREJUDICE",
    type: "standard",
    prompt: "Stereotype threat refers to:",
    choices: [
      "Applying group stereotypes to all group members",
      "Anxiety about confirming a negative stereotype, which can impair performance",
      "Believing one's group is superior",
      "Discriminatory behavior toward stereotyped groups"
    ],
    correct: 1,
    why: "Steele & Aronson: awareness of a negative stereotype creates anxiety that can impair performance — actually confirming the stereotype. Removing the threat improves performance."
  },
  {
    unit: "4",
    concept: "PREJUDICE",
    type: "standard",
    prompt: "When visiting London, Ethan says 'The British drive on the wrong side of the road' rather than simply noting they drive on the left. This illustrates:",
    choices: [
      "Self-serving bias",
      "Fundamental attribution error",
      "Ethnocentrism",
      "Actor/observer bias"
    ],
    correct: 2,
    why: "Ethnocentrism: judging another culture through the lens of your own and viewing your own group's practices as 'correct.' Ethan labels the difference as 'wrong' rather than just different."
  },
  {
    unit: "4",
    concept: "AGGRESSION",
    type: "standard",
    prompt: "The frustration-aggression hypothesis proposes that:",
    choices: [
      "Aggression is always biological",
      "Frustration (blocking of a goal) increases the likelihood of aggression",
      "Watching violence always increases aggression",
      "Aggression is entirely learned"
    ],
    correct: 1,
    why: "Dollard et al.: frustration creates anger that predisposes aggression. The aggression may target the source of frustration or be displaced onto a safer target."
  },
  {
    unit: "4",
    concept: "SITUATIONS",
    type: "standard",
    prompt: "Zimbardo's Stanford prison experiment demonstrated that:",
    choices: [
      "People resist adopting assigned roles",
      "Situational forces can powerfully influence behavior, even overriding disposition",
      "Guards are naturally aggressive",
      "Obedience only occurs with physical punishment"
    ],
    correct: 1,
    why: "Zimbardo: normal college students assigned as 'guards' became abusive and 'prisoners' became passive within days. Situations can overwhelm personality."
  },
  {
    unit: "4",
    concept: "PERSONALITY",
    type: "standard",
    prompt: "Nhora completed an assessment measuring extraversion, conscientiousness, emotional stability, openness, and agreeableness. This represents:",
    choices: [
      "Humanistic theory",
      "Psychodynamic theory",
      "Social-cognitive theory",
      "Trait theory"
    ],
    correct: 3,
    why: "These are the Big Five traits (OCEAN) — the most widely accepted and empirically validated personality dimensions, central to the trait theory approach."
  },
  {
    unit: "4",
    concept: "PERSONALITY",
    type: "standard",
    prompt: "Professor Janesky encouraged students to improve punctuality and organization. Using the Big Five, which trait was she targeting?",
    choices: [
      "Emotional stability",
      "Openness to experience",
      "Agreeableness",
      "Conscientiousness"
    ],
    correct: 3,
    why: "Conscientiousness: people high in this trait tend to be punctual, organized, and hardworking. It's one of the strongest personality predictors of academic and job performance."
  },
  {
    unit: "4",
    concept: "PERSONALITY",
    type: "standard",
    prompt: "According to Freud, the ego operates on the:",
    choices: [
      "Pleasure principle",
      "Reality principle",
      "Morality principle",
      "Unconscious principle"
    ],
    correct: 1,
    why: "The ego operates on the reality principle — mediating between the id's desires (pleasure principle) and the superego's moral standards."
  },
  {
    unit: "4",
    concept: "PERSONALITY",
    type: "standard",
    prompt: "Marc is jealous that his friend got the lead role in a play, but he tells his friend how happy he is. This defense mechanism is:",
    choices: [
      "Sublimation",
      "Reaction formation",
      "Regression",
      "Displacement"
    ],
    correct: 1,
    why: "Reaction formation: replacing an unacceptable impulse by acting in the opposite manner. Marc replaces jealous feelings by expressing exaggerated happiness."
  },
  {
    unit: "4",
    concept: "PERSONALITY",
    type: "standard",
    prompt: "A person channels aggressive impulses into competitive sports. This defense mechanism is:",
    choices: [
      "Projection",
      "Displacement",
      "Sublimation",
      "Reaction formation"
    ],
    correct: 2,
    why: "Sublimation redirects unacceptable impulses into socially acceptable activities. Freud considered it the most mature defense mechanism."
  },
  {
    unit: "4",
    concept: "PERSONALITY",
    type: "standard",
    prompt: "Bandura's concept of self-efficacy refers to:",
    choices: [
      "Overall self-worth",
      "Belief in one's ability to succeed at specific tasks",
      "Tendency to attribute success to internal factors",
      "The gap between ideal and actual self"
    ],
    correct: 1,
    why: "Self-efficacy is your belief in your ability to accomplish specific goals. It differs from self-esteem (general self-worth). High self-efficacy → more persistence and resilience."
  },
  {
    unit: "4",
    concept: "PERSONALITY",
    type: "standard",
    prompt: "Bandura's reciprocal determinism states that behavior is influenced by the interaction of:",
    choices: [
      "Id, ego, and superego",
      "Personal factors, behavior, and environmental factors",
      "Nature, nurture, and free will",
      "Conscious, preconscious, and unconscious"
    ],
    correct: 1,
    why: "Reciprocal determinism: personality results from continuous interaction among personal/cognitive factors, behavior, and environment. Each influences the others."
  },
  {
    unit: "4",
    concept: "PERSONALITY",
    type: "standard",
    prompt: "Rogers believed psychological problems arise from a gap between the:",
    choices: [
      "Conscious and unconscious mind",
      "Ideal self and actual self",
      "Id and superego",
      "Introversion and extraversion"
    ],
    correct: 1,
    why: "Rogers: incongruence between ideal self (who you want to be) and actual self (who you are) causes anxiety. Unconditional positive regard helps close this gap."
  },
  {
    unit: "4",
    concept: "PERSONALITY",
    type: "standard",
    prompt: "An internal locus of control means a person believes:",
    choices: [
      "Events are controlled by outside forces like luck",
      "They have control over outcomes through their own actions",
      "Behavior is determined by unconscious drives",
      "Personality cannot change after childhood"
    ],
    correct: 1,
    why: "Rotter's internal LOC: 'I control my outcomes.' External LOC: 'Luck or fate controls me.' Internal LOC is linked to better academic performance and health."
  },

  // ═══════════════════════════════════════════════════════════════
  // UNIT 5 — MENTAL AND PHYSICAL HEALTH
  // ═══════════════════════════════════════════════════════════════

  {
    unit: "5",
    concept: "DISORDERS",
    type: "standard",
    prompt: "The DSM-5 is best described as:",
    choices: [
      "A manual of treatments for psychological disorders",
      "A classification system for diagnosing psychological disorders",
      "A collection of case studies",
      "A legal reference for determining insanity"
    ],
    correct: 1,
    why: "The DSM-5 provides standardized criteria for classifying and diagnosing psychological disorders. It does NOT prescribe treatments."
  },
  {
    unit: "5",
    concept: "DISORDERS",
    type: "standard",
    prompt: "Victor stays up until 2 a.m. cleaning compulsively, causing him to be late to work. The most objective criterion for diagnosing his OCD is:",
    choices: [
      "Levels of dysfunction that impair daily activities",
      "Inappropriate emotional responses to events",
      "Perception of distress from friends and family",
      "Violation of social norms"
    ],
    correct: 0,
    why: "Victor's cleaning rituals impair his daily functioning (missing work). Dysfunction — inability to carry out normal activities — is one of the most objective diagnostic criteria."
  },
  {
    unit: "5",
    concept: "DISORDERS",
    type: "standard",
    prompt: "Major depressive disorder is characterized by:",
    choices: [
      "Alternating episodes of depression and mania",
      "Persistent sadness and loss of interest lasting at least two weeks",
      "Sudden, intense episodes of fear with physical symptoms",
      "Persistent, excessive worry about multiple areas of life"
    ],
    correct: 1,
    why: "MDD requires depressed mood or loss of interest nearly every day for at least 2 weeks, plus additional symptoms like sleep changes, fatigue, or difficulty concentrating."
  },
  {
    unit: "5",
    concept: "DISORDERS",
    type: "standard",
    prompt: "A cognitive psychologist would most likely explain Michael's depression as resulting from:",
    choices: [
      "A neurochemical imbalance",
      "Unconscious conflicts from childhood trauma",
      "Being rewarded for defeated behaviors",
      "A pattern of self-defeating cycles of thinking"
    ],
    correct: 3,
    why: "The cognitive perspective focuses on maladaptive thinking as the source of mental disorders — negative automatic thoughts, cognitive distortions, and irrational beliefs."
  },
  {
    unit: "5",
    concept: "DISORDERS",
    type: "standard",
    prompt: "Bipolar disorder is characterized by:",
    choices: [
      "Persistent worry about multiple life domains",
      "Cycling between manic and depressive episodes",
      "Recurrent intrusive thoughts and repetitive behaviors",
      "Flashbacks following a traumatic event"
    ],
    correct: 1,
    why: "Bipolar disorder involves cycling between manic episodes (elevated mood, grandiosity, impulsivity) and depressive episodes."
  },
  {
    unit: "5",
    concept: "DISORDERS",
    type: "standard",
    prompt: "Which of the following is a negative symptom of schizophrenia?",
    choices: [
      "Hearing voices saying they are evil",
      "Showing no emotional reaction to disturbing news",
      "Speaking so quickly sentences are incoherent",
      "Believing they can control others by staring and chanting"
    ],
    correct: 1,
    why: "Flat affect (showing no emotional reaction) is a negative symptom — a 'subtraction' from normal functioning. Hallucinations, delusions, and disorganized speech are positive symptoms."
  },
  {
    unit: "5",
    concept: "DISORDERS",
    type: "standard",
    prompt: "Antipsychotic medications primarily work by blocking:",
    choices: [
      "Serotonin receptors",
      "GABA receptors",
      "Dopamine receptors",
      "Norepinephrine receptors"
    ],
    correct: 2,
    why: "Traditional antipsychotics block dopamine receptors, reducing positive symptoms of schizophrenia. This supports the dopamine hypothesis."
  },
  {
    unit: "5",
    concept: "DISORDERS",
    type: "standard",
    prompt: "GAD is characterized by:",
    choices: [
      "Specific phobias interfering with daily life",
      "Recurrent intrusive thoughts and repetitive behaviors",
      "Persistent, excessive, uncontrollable worry about various topics",
      "Sudden episodes of intense fear with physical symptoms"
    ],
    correct: 2,
    why: "GAD involves chronic, excessive worry about multiple areas (health, money, work) lasting at least 6 months. It's often called 'free-floating anxiety.'"
  },
  {
    unit: "5",
    concept: "DISORDERS",
    type: "standard",
    prompt: "A person with sudden, intense terror including heart pounding and fear of dying — without an obvious trigger — most likely has:",
    choices: [
      "Generalized anxiety disorder",
      "Panic disorder",
      "Specific phobia",
      "Agoraphobia"
    ],
    correct: 1,
    why: "Panic disorder: recurrent, unexpected panic attacks — sudden surges of intense fear with physical symptoms. The 'unexpected' part distinguishes it from phobias."
  },
  {
    unit: "5",
    concept: "DISORDERS",
    type: "AAQ",
    prompt: "Which of the following is NOT classified as an anxiety disorder in the DSM-5?",
    choices: [
      "Social anxiety disorder",
      "Specific phobia",
      "Obsessive-compulsive disorder",
      "Generalized anxiety disorder"
    ],
    correct: 2,
    why: "In the DSM-5, OCD was moved OUT of anxiety disorders into its own category. PTSD was similarly moved to 'Trauma- and Stressor-Related Disorders.' This is a frequently tested distinction."
  },
  {
    unit: "5",
    concept: "DISORDERS",
    type: "standard",
    prompt: "Caleb was in a car accident and now experiences severe anxiety at intersections six months later. This is consistent with:",
    choices: [
      "Obsessive-compulsive disorder",
      "Posttraumatic stress disorder",
      "Agoraphobia",
      "Avoidant personality disorder"
    ],
    correct: 1,
    why: "PTSD is characterized by exposure to a traumatic event with subsequent psychological distress — including re-experiencing, avoidance, and hyperarousal."
  },
  {
    unit: "5",
    concept: "DISORDERS",
    type: "standard",
    prompt: "Dissociative identity disorder is characterized by:",
    choices: [
      "A split between thoughts and emotions",
      "The presence of two or more distinct personality states",
      "Persistent detachment from one's body",
      "Sudden unexplained travel away from home"
    ],
    correct: 1,
    why: "DID involves two or more distinct personality states with gaps in memory. It's controversial and believed to stem from severe childhood trauma."
  },
  {
    unit: "5",
    concept: "DISORDERS",
    type: "standard",
    prompt: "After an argument, Julie disappears from home for a week with no memory of where she went. This is most consistent with:",
    choices: [
      "Constant autonomic arousal with no clear source",
      "Recurring nightmares about a past event",
      "A dissociative disorder",
      "Making friends easily but feeling no guilt for lying"
    ],
    correct: 2,
    why: "Dissociative disorders involve psychologically distancing from events, often with memory loss. Julie's amnesia and wandering after a stressor are characteristic features."
  },
  {
    unit: "5",
    concept: "DISORDERS",
    type: "standard",
    prompt: "Antisocial personality disorder is characterized by:",
    choices: [
      "Intense fear of social situations",
      "A pervasive pattern of disregard for others' rights",
      "Unstable relationships with fear of abandonment",
      "Persistent belief in a serious medical illness"
    ],
    correct: 1,
    why: "ASPD: a pattern of violating others' rights, lack of empathy, deceitfulness, and impulsivity. Often associated with 'sociopath/psychopath' in popular culture."
  },
  {
    unit: "5",
    concept: "DISORDERS",
    type: "standard",
    prompt: "The diathesis-stress model proposes that disorders result from:",
    choices: [
      "Genetic factors alone",
      "Environmental stress alone",
      "A combination of genetic predisposition and environmental triggers",
      "Poor coping skills learned in childhood"
    ],
    correct: 2,
    why: "The diathesis-stress model: disorders arise when biological vulnerability (predisposition) interacts with environmental stressors. Neither alone is sufficient."
  },
  {
    unit: "5",
    concept: "TREATMENT",
    type: "standard",
    prompt: "CBT is based on the idea that:",
    choices: [
      "Problems result from unconscious conflicts",
      "Maladaptive thoughts contribute to distress and can be changed",
      "Disorders are best treated with medication alone",
      "Free association resolves symptoms"
    ],
    correct: 1,
    why: "CBT combines cognitive therapy (changing maladaptive thoughts) with behavioral techniques. It's the most empirically supported psychotherapy for many disorders."
  },
  {
    unit: "5",
    concept: "TREATMENT",
    type: "standard",
    prompt: "Dante fears bees and his therapist uses counterconditioning. This technique is based on:",
    choices: [
      "Operant conditioning",
      "Classical conditioning",
      "Habituation",
      "Biological preparedness"
    ],
    correct: 1,
    why: "Counterconditioning replaces an unwanted conditioned response (fear) with a new, incompatible response (relaxation). It's based on classical conditioning principles — creating new associations."
  },
  {
    unit: "5",
    concept: "TREATMENT",
    type: "standard",
    prompt: "Systematic desensitization treats phobias by:",
    choices: [
      "Immediately exposing the person to their most feared stimulus",
      "Pairing relaxation with a gradually increasing hierarchy of feared stimuli",
      "Using free association to uncover the fear's root",
      "Administering medication alone"
    ],
    correct: 1,
    why: "Wolpe's systematic desensitization: learn relaxation → create anxiety hierarchy → pair relaxation with each step. Based on counterconditioning."
  },
  {
    unit: "5",
    concept: "TREATMENT",
    type: "standard",
    prompt: "Carl Rogers' client-centered therapy emphasizes:",
    choices: [
      "Interpreting unconscious conflicts",
      "Unconditional positive regard, empathy, and genuineness",
      "Systematic desensitization",
      "Identifying cognitive distortions"
    ],
    correct: 1,
    why: "Rogers: the therapist provides unconditional positive regard (acceptance), empathic understanding, and genuineness. These conditions enable self-directed growth."
  },
  {
    unit: "5",
    concept: "TREATMENT",
    type: "standard",
    prompt: "In psychoanalytic therapy, transference occurs when:",
    choices: [
      "The therapist projects feelings onto the patient",
      "The patient unconsciously redirects feelings for significant others onto the therapist",
      "The patient resists discussing painful topics",
      "The patient transfers learned behaviors to new situations"
    ],
    correct: 1,
    why: "Transference: the patient unconsciously transfers feelings from past relationships (often parents) onto the therapist. Analysts use this for insight into relationship patterns."
  },
  {
    unit: "5",
    concept: "TREATMENT",
    type: "standard",
    prompt: "ECT is most commonly used today to treat:",
    choices: [
      "Schizophrenia as a first-line treatment",
      "Severe, treatment-resistant depression",
      "Generalized anxiety disorder",
      "Autism spectrum disorder"
    ],
    correct: 1,
    why: "ECT sends brief electrical currents through the brain to induce a seizure. It's used for severe, treatment-resistant depression when other treatments have failed."
  },
  {
    unit: "5",
    concept: "TREATMENT",
    type: "standard",
    prompt: "The deinstitutionalization movement led to:",
    choices: [
      "More long-term psychiatric hospitals",
      "Release of many patients without adequate community support",
      "A decrease in homelessness among mentally ill individuals",
      "Greater use of ECT"
    ],
    correct: 1,
    why: "Deinstitutionalization released patients from hospitals, but many lacked adequate community mental health services, contributing to homelessness and incarceration."
  },
  {
    unit: "5",
    concept: "EMOTION",
    type: "standard",
    prompt: "The James-Lange theory proposes that:",
    choices: [
      "Arousal and emotion occur simultaneously",
      "Physiological arousal occurs first, then we interpret it as emotion",
      "Cognitive appraisal determines emotion",
      "Facial expressions trigger emotion"
    ],
    correct: 1,
    why: "James-Lange: stimulus → body response → emotion. 'We feel afraid BECAUSE we run,' not we run because we feel afraid."
  },
  {
    unit: "5",
    concept: "EMOTION",
    type: "standard",
    prompt: "Schachter-Singer's two-factor theory states that emotion requires:",
    choices: [
      "Only physiological arousal",
      "Only cognitive labeling",
      "Both physiological arousal AND a cognitive label",
      "A matching facial expression"
    ],
    correct: 2,
    why: "Two-factor theory: emotion = arousal + cognitive label. Participants who couldn't attribute arousal to an injection felt more emotion from the situation."
  },
  {
    unit: "5",
    concept: "EMOTION",
    type: "standard",
    prompt: "Brody looked out a window and saw a figure — his heart raced and he sweated. When he realized it was a friend's brother, he relabeled his arousal as excitement instead of fear. This best illustrates:",
    choices: [
      "Cognitive label",
      "Facial feedback",
      "Physiological arousal",
      "Instinct"
    ],
    correct: 0,
    why: "Brody relabeled the same physiological arousal (racing heart, sweating) with a different cognitive label — excitement instead of fear. This supports Schachter-Singer's two-factor theory."
  },
  {
    unit: "5",
    concept: "EMOTION",
    type: "standard",
    prompt: "Ekman's research on facial expressions found that:",
    choices: [
      "All expressions are culturally learned",
      "Six basic emotions have universally recognized expressions",
      "Expressions only communicate within the same culture",
      "Humans can accurately fake any expression"
    ],
    correct: 1,
    why: "Ekman found six universal emotions: happiness, sadness, anger, fear, disgust, and surprise. Even isolated cultures recognize these, suggesting a biological basis."
  },
  {
    unit: "5",
    concept: "EMOTION",
    type: "standard",
    prompt: "The facial feedback hypothesis suggests that:",
    choices: [
      "We accurately read others' expressions",
      "Our facial expressions can influence our emotional experience",
      "All expressions are universal",
      "Facial muscles have no effect on emotions"
    ],
    correct: 1,
    why: "Facial feedback: expressions don't just reflect emotions — they influence them. Holding a pen in your teeth (forcing a smile) can make cartoons seem funnier."
  },
  {
    unit: "5",
    concept: "MOTIVATION",
    type: "standard",
    prompt: "Maslow's hierarchy places ________ at the base and ________ at the top.",
    choices: [
      "Safety needs; self-actualization",
      "Physiological needs; self-actualization",
      "Belongingness; esteem",
      "Self-actualization; physiological needs"
    ],
    correct: 1,
    why: "Maslow's pyramid: physiological → safety → belongingness/love → esteem → self-actualization. Lower needs must be met before higher needs motivate behavior."
  },
  {
    unit: "5",
    concept: "MOTIVATION",
    type: "standard",
    prompt: "Emily loves to dance because she enjoys expressing herself and finds joy in being creative. This illustrates:",
    choices: [
      "Internal locus of control",
      "Intrinsic motivation",
      "Extrinsic motivation",
      "Display rules"
    ],
    correct: 1,
    why: "Intrinsic motivation: doing something because it's personally satisfying. Emily's motivation comes from within — not from external, tangible rewards."
  },
  {
    unit: "5",
    concept: "MOTIVATION",
    type: "standard",
    prompt: "The overjustification effect occurs when:",
    choices: [
      "A person is internally motivated to overperform",
      "External rewards decrease intrinsic motivation for an already enjoyable activity",
      "Arousal is too high for optimal performance",
      "Goals are set too low, reducing effort"
    ],
    correct: 1,
    why: "The overjustification effect: rewarding someone for something they already enjoy can shift motivation from 'I do this because I love it' to 'I do this because I get paid.'"
  },
  {
    unit: "5",
    concept: "MOTIVATION",
    type: "standard",
    prompt: "The Yerkes-Dodson law states that performance on complex tasks is optimal at:",
    choices: [
      "Very high arousal",
      "Very low arousal",
      "Moderate arousal",
      "Any arousal level, if motivated"
    ],
    correct: 2,
    why: "Yerkes-Dodson: moderate arousal is best for complex tasks. Too little → boredom; too much → anxiety. Simple tasks benefit from higher arousal."
  },
  {
    unit: "5",
    concept: "STRESS",
    type: "standard",
    prompt: "Priya has a demanding job and busy family life, causing high stress. She meditates each morning for 20 minutes. This is an example of:",
    choices: [
      "Emotion-focused coping",
      "Diathesis-stress",
      "General adaptation syndrome",
      "Eustress"
    ],
    correct: 0,
    why: "Emotion-focused coping comprises strategies like meditation that help relieve negative emotions (anxiety, anger, stress) rather than directly solving the problem."
  },
  {
    unit: "5",
    concept: "STRESS",
    type: "standard",
    prompt: "Juan Carlos received a poor review and now has racing heart, elevated blood pressure, and wants to stay home. His work quality is declining. He is experiencing:",
    choices: [
      "Eustress",
      "Dissociation",
      "Distress",
      "Projection"
    ],
    correct: 2,
    why: "Distress is negative stress that impairs functioning. Juan Carlos shows physiological symptoms and declining performance — classic distress responses."
  },
  {
    unit: "5",
    concept: "STRESS",
    type: "standard",
    prompt: "Selye's General Adaptation Syndrome describes three stress stages in order:",
    choices: [
      "Resistance, alarm, exhaustion",
      "Alarm, resistance, exhaustion",
      "Exhaustion, alarm, resistance",
      "Alarm, exhaustion, resistance"
    ],
    correct: 1,
    why: "GAS: (1) Alarm — fight-or-flight, (2) Resistance — body adapts, (3) Exhaustion — resources depleted, vulnerability increases."
  },
  {
    unit: "5",
    concept: "STRESS",
    type: "EBQ",
    prompt: "Dr. Pilkington surveyed teachers about stress. The top sources were: difficulty with technology, lack of classroom control, lack of admin support, lack of parent support, and lack of personal time. Which concept explains the common theme?",
    choices: [
      "External locus of control",
      "Intrinsic motivation",
      "Fundamental attribution error",
      "Social facilitation"
    ],
    correct: 0,
    why: "Each stressor involves lack of personal control over outcomes. External locus of control — the perception that events are outside one's control — is the common thread."
  },
  {
    unit: "5",
    concept: "MOTIVATION",
    type: "standard",
    prompt: "Set-point theory suggests body weight is regulated by:",
    choices: [
      "Conscious willpower alone",
      "A biologically determined weight range the body works to maintain",
      "Cultural standards of body size",
      "Number of meals per day"
    ],
    correct: 1,
    why: "Set-point theory: the body defends a biologically programmed weight range through metabolic adjustments. When weight drops below set point, metabolism slows and hunger increases."
  },
  {
    unit: "5",
    concept: "MOTIVATION",
    type: "standard",
    prompt: "Achievement motivation theory predicts that high-achievers prefer:",
    choices: [
      "Easy tasks where success is guaranteed",
      "Tasks of moderate difficulty with a reasonable chance of success",
      "Extremely difficult tasks where failure is expected",
      "Tasks assigned by authority figures"
    ],
    correct: 1,
    why: "McClelland: high-achievers prefer moderately challenging tasks — difficult enough to feel accomplishment but achievable with effort."
  },

  // ═══════════════════════════════════════════════════════════════
  // RESEARCH METHODS — INTEGRATED ACROSS UNITS (Science Practices)
  // ═══════════════════════════════════════════════════════════════

  {
    unit: "1",
    concept: "RESEARCH METHODS",
    type: "EBQ",
    prompt: "A researcher finds a correlation of -0.87 between hours of sleep and cognitive errors. Which statement is most accurate?",
    choices: [
      "Less sleep causes more errors",
      "There is a strong negative relationship between the variables",
      "The correlation is weak because it is negative",
      "Sleep deprivation has no meaningful relationship with errors"
    ],
    correct: 1,
    why: "A correlation of -0.87 is strong (close to -1.0). The negative sign means as one increases, the other decreases. Correlation does NOT imply causation."
  },
  {
    unit: "2",
    concept: "RESEARCH METHODS",
    type: "EBQ",
    prompt: "In an experiment on caffeine and reaction time, participants drink coffee or decaf before a timed task. The reaction time is the:",
    choices: [
      "Independent variable",
      "Dependent variable",
      "Confounding variable",
      "Control condition"
    ],
    correct: 1,
    why: "The DV is what is measured (reaction time). The IV is what is manipulated (caffeine vs. decaf)."
  },
  {
    unit: "3",
    concept: "RESEARCH METHODS",
    type: "EBQ",
    prompt: "Dr. Steinberg flipped a coin to assign participants to two movie conditions and measured fear ratings. Which step indicates this is an experiment?",
    choices: [
      "Using random assignment",
      "Using random sampling",
      "Calculating a correlation coefficient",
      "Operationally defining fear"
    ],
    correct: 0,
    why: "Random assignment is the hallmark of a true experiment. It controls for pre-existing differences between groups, allowing causal conclusions."
  },
  {
    unit: "4",
    concept: "RESEARCH METHODS",
    type: "EBQ",
    prompt: "In a study, a student was recruited to pretend to bully others while a psychologist monitored responses. The student pretending to bully is:",
    choices: [
      "A dependent variable",
      "A confounding variable",
      "A research confederate",
      "A control group"
    ],
    correct: 2,
    why: "Confederates are individuals who appear to be participants but are actually part of the research team, playing a scripted role."
  },
  {
    unit: "5",
    concept: "RESEARCH METHODS",
    type: "standard",
    prompt: "Double-blind procedures control for:",
    choices: [
      "Sampling bias",
      "Researcher and participant expectations",
      "The effects of the independent variable",
      "Attrition in longitudinal studies"
    ],
    correct: 1,
    why: "In double-blind procedures, neither participants nor researchers know group assignments. This controls for placebo effects and experimenter bias."
  },
  {
    unit: "1",
    concept: "RESEARCH METHODS",
    type: "EBQ",
    prompt: "A set of test scores has a mean of 80, median of 85, and mode of 90. The distribution is most likely:",
    choices: [
      "Positively skewed",
      "Negatively skewed",
      "Normal",
      "Bimodal"
    ],
    correct: 1,
    why: "When mean < median < mode, the distribution is negatively (left) skewed. The mean gets 'pulled' toward the tail by extreme low scores."
  },
  {
    unit: "2",
    concept: "RESEARCH METHODS",
    type: "standard",
    prompt: "Which measure of central tendency is most affected by outliers?",
    choices: [
      "Mode",
      "Median",
      "Mean",
      "Standard deviation"
    ],
    correct: 2,
    why: "The mean is calculated by summing all scores and dividing by N, so extreme values pull it. The median is resistant to outliers. Standard deviation measures variability."
  },
  {
    unit: "3",
    concept: "RESEARCH METHODS",
    type: "EBQ",
    prompt: "Dr. Collins measured height and weight of 29 children and found they were related. She used:",
    choices: [
      "A longitudinal design",
      "An experiment",
      "A case study",
      "A correlational study"
    ],
    correct: 3,
    why: "A correlational study examines relationships between variables without manipulating an independent variable. It cannot establish causation."
  },
  {
    unit: "4",
    concept: "RESEARCH METHODS",
    type: "EBQ",
    prompt: "Dr. Collins found height relates to weight, but a colleague suggests nutrition could affect both. This is an example of:",
    choices: [
      "Social desirability bias",
      "The third variable problem",
      "Falsifiability",
      "The directionality problem"
    ],
    correct: 1,
    why: "The third variable problem: an unmeasured variable (nutrition) could be causing changes in both measured variables. This is a key limitation of correlational research."
  },
  {
    unit: "5",
    concept: "RESEARCH METHODS",
    type: "EBQ",
    prompt: "Mr. Latture found that students with ADHD earned more tokens than students without ADHD, and the difference was statistically significant. This means:",
    choices: [
      "There is a negative correlation between ADHD and tokens",
      "There is a negative correlation between tokens and on-task behavior",
      "The difference is unlikely to be due to chance",
      "The difference is likely due to chance"
    ],
    correct: 2,
    why: "Statistical significance means the findings were unlikely due to chance alone. At p < .05, there is less than a 5% probability the results occurred randomly."
  },
  {
    unit: "1",
    concept: "RESEARCH METHODS",
    type: "EBQ",
    prompt: "Dr. Reyes analyzed game data from local news reports while also attending games herself. She found teams win more at home. This is a:",
    choices: [
      "An experiment",
      "A longitudinal study",
      "A naturalistic observation",
      "A meta-analysis"
    ],
    correct: 2,
    why: "Naturalistic observation: unobtrusive observation in participants' natural environment. Dr. Reyes observed and recorded wins without manipulating any variables."
  },
  {
    unit: "2",
    concept: "RESEARCH METHODS",
    type: "standard",
    prompt: "Dr. Morgan combines data from multiple studies on social anxiety treatments to determine overall effects. This is:",
    choices: [
      "A meta-analysis",
      "A case study",
      "An experiment",
      "A cross-sectional study"
    ],
    correct: 0,
    why: "A meta-analysis combines data from multiple studies to find overall patterns and effect sizes. It provides a more reliable picture than any single study."
  },
  {
    unit: "3",
    concept: "RESEARCH METHODS",
    type: "EBQ",
    prompt: "Dr. Matas proposes randomly assigning toddler twins to environmentally deprived or enriched homes. This research is flawed because:",
    choices: [
      "He needs random sampling instead of random assignment",
      "There is no way to define intelligence",
      "He cannot ethically put participants in a deprived home",
      "Correlational studies don't show cause and effect"
    ],
    correct: 2,
    why: "Placing children in environmentally deprived homes would violate ethical guidelines. Researchers must protect participants from harm — the principle of beneficence."
  },
  {
    unit: "5",
    concept: "RESEARCH METHODS",
    type: "EBQ",
    prompt: "Dr. Pilkington interviewed teachers about stress and coded their responses by frequency. She used:",
    choices: [
      "A Likert scale",
      "Standard deviation",
      "Split-half reliability",
      "Qualitative analysis"
    ],
    correct: 3,
    why: "Dr. Pilkington analyzed interview data — open-ended responses coded into categories. This is qualitative analysis, which interprets non-numerical data."
  },
  {
    unit: "4",
    concept: "RESEARCH METHODS",
    type: "EBQ",
    prompt: "Dr. Pilkington's interview questions could have affected teacher responses. This potential source of bias is:",
    choices: [
      "Rehearsal",
      "Framing",
      "Foot-in-the-door technique",
      "Placebo effect"
    ],
    correct: 1,
    why: "Framing: the way questions are worded can elicit biased responses. Leading or loaded questions can influence what participants report."
  },
  {
    unit: "5",
    concept: "RESEARCH METHODS",
    type: "EBQ",
    prompt: "Dr. Morales put stickers on half of returned assignments. Students who received stickers had a smaller range in study hours than those without. This means:",
    choices: [
      "There was less variability in study time among the sticker group",
      "The mean study time was higher for the non-sticker group",
      "The median was the same in both groups",
      "Both groups had bimodal distributions"
    ],
    correct: 0,
    why: "Range is a measure of variability. A smaller range means scores are more clustered together — less variability in the sticker group's study time."
  },
  {
    unit: "1",
    concept: "ETHICS",
    type: "standard",
    prompt: "Dr. Milton's patient's employer calls to ask if the patient is receiving treatment. Providing this information would violate:",
    choices: [
      "Protection from harm",
      "Debriefing",
      "Informed consent",
      "Confidentiality"
    ],
    correct: 3,
    why: "Confidentiality: researchers and clinicians must keep participant/client information private. Sharing treatment status with an employer without consent is a clear violation."
  },
  {
    unit: "2",
    concept: "ETHICS",
    type: "standard",
    prompt: "Which ethical principle would be violated if Dr. Francis dated his client?",
    choices: [
      "Confidentiality",
      "Beneficence",
      "Avoiding deception",
      "Fidelity"
    ],
    correct: 3,
    why: "Fidelity: clinical psychologists must maintain professional boundaries. Dating clients violates the professional relationship and trust."
  },
  {
    unit: "3",
    concept: "ETHICS",
    type: "standard",
    prompt: "Before recruiting participants, a researcher must first:",
    choices: [
      "Calculate and interpret the data",
      "Undergo institutional review",
      "Debrief the participants",
      "Conduct random assignment"
    ],
    correct: 1,
    why: "Institutional Review Board (IRB) approval must be obtained before recruiting participants. The IRB evaluates the study's ethical compliance and protects participants."
  },
  {
    unit: "4",
    concept: "RESEARCH METHODS",
    type: "standard",
    prompt: "External validity refers to:",
    choices: [
      "Whether the study measures what it claims to",
      "Whether findings generalize beyond the specific study",
      "Whether the IV caused changes in the DV",
      "Whether the study follows ethical guidelines"
    ],
    correct: 1,
    why: "External validity: the extent findings generalize to other settings, populations, and times. Internal validity is about causal inference within the study."
  },
  {
    unit: "3",
    concept: "RESEARCH METHODS",
    type: "standard",
    prompt: "Operational definitions are important because they:",
    choices: [
      "Eliminate all bias",
      "Allow other researchers to precisely replicate procedures",
      "Guarantee statistical significance",
      "Ensure representative samples"
    ],
    correct: 1,
    why: "Operational definitions specify exactly how a variable is measured or manipulated — making replication possible. Without them, different researchers might measure 'aggression' completely differently."
  },
  {
    unit: "5",
    concept: "RESEARCH METHODS",
    type: "EBQ",
    prompt: "Dr. Tabor surveyed 1,000 participants about defense mechanism use and well-being scores. The best operational definition of her variables is:",
    choices: [
      "The number of stressors and use of defense mechanisms",
      "How often participants report using defense mechanisms and their scores on the well-being test",
      "Defense mechanisms, stress, and well-being",
      "Ages of participants and number of defense mechanisms"
    ],
    correct: 1,
    why: "Good operational definitions specify HOW variables will be measured. Self-reported frequency of defense mechanism use and well-being test scores are specific, measurable definitions."
  }

];
