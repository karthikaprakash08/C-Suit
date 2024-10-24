import axios from "axios";

const API = axios.create({
  baseURL: "https://csuite-ui0f.onrender.com/api",
});


// user
export const addnewUser = (userdata) => API.post("/user", userdata);

export const allUsers = () => API.get("/user", console.log("req->"));

export const updateUser = (userdata, Id) => API.put(`/user/${Id}`, userdata);

export const deleteUser = (Id) => API.delete(`/user/${Id}`);


// purchases
export const allPurchases = () => API.get(`/payment`);


// courses
export const addnewCourse = (course) => API.post("/courseDetail/add", course);

export const getAllCourse = () => API.get("/courseDetail");

export const uploadVedio = (formdata) =>
  API.post("/uploadtovimeo", formdata, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const uploadDocument = (formdata) =>
  API.post("/uploadtodrive", formdata, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const updateCourse = (updatedData) =>
  API.put(`/courseDetail/edit/${updatedData?._id}`, updatedData);

export const deleteCourse = (courseId) =>
  API.delete(`/courseDetail/delete/${courseId}`);


// test
export const addnewTest = (test) => API.post("/tests", test);

export const updateTest = (test) => API.put(`/tests/${test._id}`, test);

export const getLessonTest = (testId) => API.get(`/tests/${testId}`);


// ELA
export const getEla = () => API.get(`question`);

export const addQuestion = (questionId, section, question) =>
  API.post(`question/${questionId}/sections/${section}/questions`, question);

export const updateQuestion = (questionId, section,index,questionData) =>
  API.put(`question/${questionId}/sections/${section}/questions/${index}`,questionData);

export const updateQuestionDetails = (questionId, questionDetails) =>
  API.put(`question/${questionId}`, questionDetails);

export const deleteQuestion = (questionId, section, index) =>
  API.delete(`question/${questionId}/sections/${section}/questions/${index}`);

export const deleteTestSection = (questionId, section) =>
  API.delete(`question/${questionId}/sections/${section}`);

export const addSectionToTest = (questionId,section) =>
  API.post(`question/${questionId}/sections`,section);
