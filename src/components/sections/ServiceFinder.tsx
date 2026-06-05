import React, { useState } from 'react';
import { motion } from 'framer-motion';

const serviceFinderQuestions = [
  {
    id: 1,
    question: "What is your organization's primary challenge?",
    options: [
      { value: "recruitment", label: "Finding and hiring the right talent" },
      { value: "retention", label: "Keeping valuable employees" },
      { value: "performance", label: "Improving team performance" },
      { value: "culture", label: "Building a positive workplace culture" },
      { value: "compliance", label: "Ensuring HR compliance and policies" }
    ]
  },
  {
    id: 2,
    question: "What is your organization size?",
    options: [
      { value: "small", label: "1-50 employees" },
      { value: "medium", label: "51-500 employees" },
      { value: "large", label: "501+ employees" }
    ]
  },
  {
    id: 3,
    question: "What is your primary goal?",
    options: [
      { value: "strategy", label: "Developing HR strategy" },
      { value: "training", label: "Employee training and development" },
      { value: "systems", label: "Implementing HR systems" },
      { value: "conflict", label: "Resolving workplace conflicts" },
      { value: "growth", label: "Scaling HR for growth" }
    ]
  }
];

const serviceRecommendations = {
  recruitment: ["Talent Acquisition", "Employer Branding", "Leadership Assessment"],
  retention: ["Employee Engagement", "Performance Management", "Compensation Strategy"],
  performance: ["Performance Management", "Leadership Development", "Training Programs"],
  culture: ["Organizational Development", "Change Management", "Employee Engagement"],
  compliance: ["HR Compliance", "Policy Development", "Risk Management"],
  small: ["HR Strategy", "Talent Acquisition", "Basic Compliance"],
  medium: ["Full HR Services", "Training & Development", "Performance Systems"],
  large: ["Strategic HR Partnership", "Organizational Development", "Advanced Analytics"],
  strategy: ["HR Strategy", "Organizational Design", "Workforce Planning"],
  training: ["Training & Development", "Leadership Programs", "Skills Assessment"],
  systems: ["HR Technology", "Process Optimization", "Data Analytics"],
  conflict: ["Employee Relations", "Conflict Resolution", "Policy Development"],
  growth: ["HR Strategy", "Talent Acquisition", "Organizational Development"]
};

export function ServiceFinder(): JSX.Element {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [recommendedServices, setRecommendedServices] = useState<string[]>([]);

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentStep]: value });
    
    if (currentStep < serviceFinderQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate recommendations
      const recommendations = new Set<string>();
      
      Object.values(answers).forEach(answer => {
        const services = serviceRecommendations[answer as keyof typeof serviceRecommendations];
        if (services) {
          services.forEach(service => recommendations.add(service));
        }
      });
      
      // Add recommendation for current answer
      const currentAnswer = value as keyof typeof serviceRecommendations;
      const currentServices = serviceRecommendations[currentAnswer];
      if (currentServices) {
        currentServices.forEach(service => recommendations.add(service));
      }
      
      setRecommendedServices(Array.from(recommendations));
      setShowResults(true);
    }
  };

  const resetFinder = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setRecommendedServices([]);
  };

  if (showResults) {
    return (
      <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-primary mb-4 dark:text-white">
              Recommended <span className="text-accent">Services</span>
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto font-normal dark:text-gray-300">
              Based on your responses, we recommend the following services for your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-surface rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all dark:bg-gray-800"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2 dark:text-white">{service}</h3>
                <p className="text-gray-600 text-sm dark:text-gray-300">
                  Tailored solutions to address your specific organizational needs
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={resetFinder}
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition-colors mr-4 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Start Over
            </button>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-primary transition-colors"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-surface dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-primary mb-4 dark:text-white">
            Find Your <span className="text-accent">Perfect HR Solution</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto font-normal dark:text-gray-300">
            Answer a few questions to discover the HR services that best match your organization's needs
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 dark:bg-gray-700">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-500 mb-2 dark:text-gray-400">
              <span>Step {currentStep + 1} of {serviceFinderQuestions.length}</span>
              <span>{Math.round(((currentStep + 1) / serviceFinderQuestions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-600">
              <div 
                className="bg-accent h-2 rounded-full transition-all duration-500" 
                style={{ width: `${((currentStep + 1) / serviceFinderQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-6 dark:text-white">
              {serviceFinderQuestions[currentStep].question}
            </h3>

            <div className="space-y-4">
              {serviceFinderQuestions[currentStep].options.map((option, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-accent hover:bg-accent/5 transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:border-gray-600 dark:hover:border-accent dark:hover:bg-accent/10"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center mr-4 dark:border-gray-500">
                      <div className="w-3 h-3 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="text-gray-700 font-medium dark:text-gray-200">{option.label}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              disabled={currentStep === 0}
              className={`px-5 py-2 rounded-lg font-medium ${
                currentStep === 0
                  ? 'text-gray-400 cursor-not-allowed dark:text-gray-600'
                  : 'text-primary hover:text-accent dark:text-gray-300'
              }`}
            >
              Previous
            </button>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {currentStep + 1} of {serviceFinderQuestions.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}