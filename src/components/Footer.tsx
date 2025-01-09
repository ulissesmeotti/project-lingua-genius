import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">LinguaGenius</h3>
            <p className="text-gray-600">
              Empowering language learners through AI-powered conversations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:support@linguagenius.com" className="flex items-center text-gray-600 hover:text-blue-500">
                <Mail className="w-5 h-5 mr-2" />
                support@linguagenius.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <div className="space-y-2">
              <Link to="/privacy" className="flex items-center text-gray-600 hover:text-blue-500">
                <Shield className="w-5 h-5 mr-2" />
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} LinguaGenius. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}