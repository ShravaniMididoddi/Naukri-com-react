import { useLayoutEffect, useState } from "react";
import "../css/registration.css";

export default function Registration(){
    useLayoutEffect(() => {
        document.body.style.backgroundColor = 'lightblue';
        return () => {
          document.body.style.backgroundColor = '';
        };
    }, []); 
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [experience, setExperience] = useState<number | "">("");
        const [resumeText] = useState("");

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            const formData = new URLSearchParams();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("experience", experience.toString());
            formData.append("resumeText", resumeText);

            try {
                const response = await fetch("http://localhost:9090/api/resume/upload", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: formData,
                });

                const result = await response.json();
                alert(result.isEligible ? "Eligible for Interview" : "Not Eligible");
            } catch (error) {
                alert("Error submitting resume.");
            }
        };

        return (
            <div className="container">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" required />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                    <input type="number" value={experience} onChange={(e) => setExperience(Number(e.target.value))} placeholder="Experience (in years)" required />
                    <title>File Upload Form</title>
                    <div className="container mt-5">
                        <h3 className="mb-4">Upload your resume</h3>
                        <form>
                            <div className="form-group">
                                <label htmlFor="fileUpload">Choose file</label>
                                <input type="file" className="form-control-file" id="fileUpload"></input>
                            </div>
                            <button type="submit" className="btn btn-primary">Upload</button>
                        </form>
                    </div>
                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core"></script>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    };