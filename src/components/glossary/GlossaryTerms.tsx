import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GlossaryTerms = () => {
  const glossary = {
    A: [
      { term: "A-Roll", definition: "Primary footage featuring main subject or dialogue." },
      { term: "Aspect Ratio", definition: "The proportional relationship between width and height (16:9, 9:16, etc.)." },
      { term: "Audio Sync", definition: "Matching video footage with audio tracks in editing." },
    ],
    B: [
      { term: "B-Roll", definition: "Supplemental footage used to add context or visual variety." },
      { term: "Bitrate", definition: "The amount of data processed per second in a video; affects quality and file size." },
    ],
    C: [
      { term: "Clip", definition: "A piece of raw or edited video." },
      { term: "Cut", definition: "The most basic transition between two shots." },
      { term: "Color Correction", definition: "Adjusting footage to achieve accurate or desired color balance." },
      { term: "Chromakey", definition: "Green screen technique for replacing backgrounds." },
    ],
    D: [
      { term: "Depth of Field", definition: "The range of focus within a shot (shallow = blurred background)." },
      { term: "Dissolve", definition: "Smooth transition between clips, often used for scene changes." },
    ],
    E: [
      { term: "Export", definition: "Final output of edited video in a specific format." },
      { term: "Effects", definition: "Visual or audio enhancements applied during post-production." },
    ],
    F: [
      { term: "Frame Rate", definition: "Number of frames per second (FPS); standard rates are 24, 30, or 60fps." },
      { term: "Fade", definition: "Gradual transition from or to black/white." },
    ],
    G: [
      { term: "Grading", definition: "Color grading to create a specific mood or visual style." },
      { term: "Graphics", definition: "Text, logos, or animated elements added to video." },
    ],
    H: [
      { term: "Handles", definition: "Extra frames before and after a clip for smooth transitions." },
      { term: "H.264", definition: "Common video codec for high-quality compression." },
    ],
    I: [
      { term: "In-Point", definition: "Starting frame of a clip in the timeline." },
      { term: "Interlaced", definition: "Video scanning method alternating between odd and even lines." },
    ],
    J: [
      { term: "J-Cut", definition: "Audio from the next scene starts before the visual cut." },
      { term: "Jump Cut", definition: "Abrupt transition creating a jarring or rhythmic effect." },
    ],
    K: [
      { term: "Keyframe", definition: "Anchor point in animation defining position, scale, or effect values." },
    ],
    L: [
      { term: "L-Cut", definition: "Audio from current scene continues into the next visual." },
      { term: "LUT", definition: "Look-Up Table for applying color grades instantly." },
    ],
    M: [
      { term: "Match Cut", definition: "Transition matching visual elements between shots." },
      { term: "Montage", definition: "Sequence of shots edited together to convey passage of time or theme." },
    ],
    N: [
      { term: "Nested Sequence", definition: "Sequence placed inside another for complex editing." },
      { term: "Non-Linear Editing", definition: "Digital editing allowing random access to any frame." },
    ],
    O: [
      { term: "Out-Point", definition: "Ending frame of a clip in the timeline." },
      { term: "Overlay", definition: "Graphic or video layer placed on top of base footage." },
    ],
    P: [
      { term: "Proxy", definition: "Low-resolution copy used for smoother editing performance." },
      { term: "Progressive Scan", definition: "Video scanning method displaying all lines at once." },
    ],
    Q: [
      { term: "Quick Cut", definition: "Fast-paced editing with brief shot durations." },
    ],
    R: [
      { term: "Render", definition: "Processing effects and edits into final viewable format." },
      { term: "Resolution", definition: "Video dimensions (e.g., 1920×1080 for Full HD)." },
    ],
    S: [
      { term: "Split Screen", definition: "Multiple video feeds shown simultaneously." },
      { term: "Speed Ramp", definition: "Gradual change in playback speed within a clip." },
    ],
    T: [
      { term: "Timeline", definition: "Workspace where clips, audio, and effects are arranged sequentially." },
      { term: "Transition", definition: "Effect connecting two clips (cut, dissolve, wipe, etc.)." },
    ],
    U: [
      { term: "Undo", definition: "Reverse the last editing action." },
    ],
    V: [
      { term: "Video Track", definition: "Layer in timeline containing video clips." },
      { term: "Voiceover", definition: "Narration recorded separately and added to video." },
    ],
    W: [
      { term: "Wipe", definition: "Transition where one shot replaces another with a moving line." },
      { term: "White Balance", definition: "Adjusting colors so whites appear neutral." },
    ],
    X: [
      { term: "XML", definition: "File format for transferring projects between editing software." },
    ],
    Y: [
      { term: "Y-Axis", definition: "Vertical axis in animation or position controls." },
    ],
    Z: [
      { term: "Zoom Transition", definition: "Camera-like zoom effect between clips." },
      { term: "Zebra Pattern", definition: "On-screen stripes showing overexposed areas in footage." },
    ],
  };

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Complete Glossary of <span className="bg-gradient-primary bg-clip-text text-transparent">Video Editing Terms</span> (A–Z)
          </h2>

          <div className="space-y-8">
            {Object.entries(glossary).map(([letter, terms]) => (
              <div key={letter} id={`letter-${letter.toLowerCase()}`} className="scroll-mt-32">
                <h3 className="text-3xl font-bold mb-4 text-primary">{letter}</h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {terms.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${letter}-${index}`}
                      className="border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-semibold hover:text-primary">
                        {item.term}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.definition}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlossaryTerms;
