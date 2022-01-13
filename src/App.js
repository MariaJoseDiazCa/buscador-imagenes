import { useState } from "react";
import { Formik, Form, Field } from "formik";
import "./header.css";

const App = () => {
  const [photos, setPhotos] = useState([]);
  console.log(photos);

  return (
    <>
      <header>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            const response = await fetch(
              `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
              {
                headers: {
                  Authorization:
                    "Client-ID qvy2y7fRCE_mIZrDJ8fevnKO8Mm29ZYhiXQSRq70mOw",
                },
              }
            );
            const data = await response.json();
            setPhotos(data.results);
          }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
    </>
  );
};

export default App;
