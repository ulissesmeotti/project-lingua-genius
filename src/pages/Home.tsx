import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Languages, Mic, MessageSquare, Brain, Check } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function Home() {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Basic',
      price: '9.99',
      features: [
        '10 hours of talk time per month',
        'Basic vocabulary exercises',
        'Text chat support',
        'Progress tracking'
      ],
      color: 'blue'
    },
    {
      name: 'Intermediate',
      price: '19.99',
      features: [
        '25 hours of talk time per month',
        'Advanced vocabulary exercises',
        'Voice recognition practice',
        'Personalized learning path',
        'Priority support'
      ],
      color: 'indigo',
      popular: true
    },
    {
      name: 'Advanced',
      price: '29.99',
      features: [
        'Unlimited talk time',
        'Expert vocabulary exercises',
        'Accent reduction training',
        'Custom scenario creation',
        'Real-time pronunciation feedback',
        '24/7 premium support'
      ],
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Master Languages Through Conversation
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience a new way of learning languages with our AI-powered conversation partner. 
                Practice speaking, improve your pronunciation, and build confidence in real-world scenarios.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <Mic className="w-8 h-8 text-blue-500" />
                  <h3 className="text-xl font-semibold ml-3">Voice Interaction</h3>
                </div>
                <p className="text-gray-600">
                  Practice pronunciation and speaking skills with voice recognition technology.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <Languages className="w-8 h-8 text-blue-500" />
                  <h3 className="text-xl font-semibold ml-3">Multiple Languages</h3>
                </div>
                <p className="text-gray-600">
                  Choose from various languages and practice at your own pace.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-blue-500" />
                  <h3 className="text-xl font-semibold ml-3">AI-Powered</h3>
                </div>
                <p className="text-gray-600">
                  Get personalized responses and corrections from our advanced AI system.
                </p>
              </div>
            </div>

            <div className="text-center mb-20">
              <button
                onClick={() => navigate('/learn')}
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
              >
                <MessageSquare className="w-6 h-6 mr-2" />
                Start Learning Now
              </button>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Select the perfect plan for your language learning journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                    plan.popular ? 'ring-2 ring-indigo-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-indigo-500 text-white px-4 py-1 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                    <div className="flex items-baseline mb-6">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-gray-600 ml-2">/month</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => navigate('/register')}
                      className={`w-full py-3 px-6 rounded-lg text-white font-semibold bg-${plan.color}-500 hover:bg-${plan.color}-600 transition-colors`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}