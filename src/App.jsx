import Bio from "./components/Bio";
import Header from "./components/Header";
import "./App.css";
import TileGrid from "./components/TileGrid";
import Proj1Desc from "./assets/p1/Proj1Desc";
import TileList from "./components/TileList";
import Proj1Features from "./assets/p1/Proj1Features";
import ProjectParagraph from "./components/ProjectParagraph";
import Text from "./assets/p1/Text";
import Image from "./components/Image";
import {
  affinityMapImage,
  colorPaletteImage,
  mentraConvoV1Image,
  projectBackgroundImage,
  typeImage,
  mentraConvoV2Image,
  wireframeImage,
  sketchImage,
} from "./assets/p1/index";
import Navbar from "./components/Navbar";
import { Typography } from "@mui/material";
import ProjectHeader from "./components/ProjectHeader";
import Proj1Findings from "./assets/p1/Proj1Findings";

function App() {
  const projectBackground = Text.projectBackground;
  const discovery = Text.discovery;
  const design = Text.design;
  const outcomes = Text.outcomes;

  return (
    <>
      <Navbar />
      <Header />
      <Bio />

      <ProjectHeader />

      <TileGrid description={Proj1Desc} />
      {projectBackground.map((paragraph, index) => (
        <ProjectParagraph
          title={paragraph.title}
          subtitle={paragraph.subtitle}
          body={paragraph.body}
          key={index}
        />
      ))}
      <TileList
        description={Proj1Features.description}
        features={Proj1Features.features}
      />
      <Image
        imageSRC={projectBackgroundImage.imageSRC}
        caption={projectBackgroundImage.caption}
      />
      {discovery.map((paragraph, index) => (
        <ProjectParagraph
          title={paragraph.title}
          subtitle={paragraph.subtitle}
          body={paragraph.body}
          key={index}
        />
      ))}
      <Image
        imageSRC={affinityMapImage.imageSRC}
        caption={affinityMapImage.caption}
      />

      <TileList
        description={Proj1Findings.description}
        features={Proj1Findings.features}
      />

      {design.map((paragraph, index) => (
        <ProjectParagraph
          title={paragraph.title}
          subtitle={paragraph.subtitle}
          body={paragraph.body}
          key={index}
        />
      ))}
      <Image
        imageSRC={wireframeImage.imageSRC}
        caption={wireframeImage.caption}
      />
      <Image
        imageSRC={colorPaletteImage.imageSRC}
        caption={colorPaletteImage.caption}
      />
      <Image imageSRC={typeImage.imageSRC} caption={typeImage.caption} />
      <Image imageSRC={sketchImage.imageSRC} caption={sketchImage.caption} />
      <Image
        imageSRC={mentraConvoV1Image.imageSRC}
        caption={mentraConvoV1Image.caption}
      />

      <Typography variant="body1" align="left">
        Early sample conversations felt too impersonal and robotic when our goal
        is to make Mentra feel like a true mentor that is invested in the user’s
        ideas.
      </Typography>
      <Typography variant="body1" align="left">
        In this example, the AI just jumps from point to point without showing
        any real interest in the idea [1]. No questions or suggestions are made
        in direct relation to what the user proposed. Furthermore, Mentra should
        guide the user more without them having to ask directly for help too
        much [2].
      </Typography>
      <Image
        imageSRC={mentraConvoV2Image.imageSRC}
        caption={mentraConvoV2Image.caption}
      />
      <Typography variant="body1" align="left">
        The final AI sample conversation aims to make Mentra feel more natural
        and friendly. In this example, Mentra actively asks and provides
        suggestions based on the user’s responses rather than just jumping to
        the next step.
      </Typography>
      <Typography variant="body1" align="left">
        Adding a more positive voice and the occasional emojis makes Mentra feel
        more invested and comfortable for users to talk to.{" "}
      </Typography>

      {outcomes.map((paragraph, index) => (
        <ProjectParagraph
          title={paragraph.title}
          subtitle={paragraph.subtitle}
          body={paragraph.body}
          key={index}
        />
      ))}
    </>
  );
}

export default App;
