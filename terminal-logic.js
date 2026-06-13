document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) window.lucide.createIcons();
    const terminalInput = document.getElementById('terminalInput');
    const terminalOutput = document.getElementById('terminalOutput');
    const terminalBody = document.getElementById('terminalBody');

    if (terminalBody && terminalInput) {
        terminalBody.addEventListener('click', () => terminalInput.focus());
        terminalInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const command = this.value.trim().toLowerCase();
                this.value = '';
                const promptLine = document.createElement('div');
                promptLine.className = 'text-white flex';
                promptLine.innerHTML = `<span class="text-cyber-sapphire mr-2">guest@ananya_sec:~$&nbsp;</span><span>${escapeHtml(command)}</span>`;
                terminalOutput.appendChild(promptLine);
                if (command.length === 0) return;

                const responseLine = document.createElement('div');
                responseLine.className = 'pl-2 text-xs font-mono tracking-wide py-1';

                switch(command) {
                    case 'help':
                        responseLine.innerHTML = `<p class="text-cyber-purple">Valid Directives Reference:</p><p class="pl-2">&gt; about / skills / clear</p>`;
                        break;
                    case 'about':
                        responseLine.innerHTML = `<p class="text-white">Ananya Jain | SecOps Specialist at VIT Bhopal (CGPA Profile Active)</p>`;
                        break;
                    case 'skills':
                        responseLine.innerHTML = `<p class="text-cyber-sapphire">SOC Operations, SIEM Monitoring, OWASP Assessments, Wireshark Packet Analysis</p>`;
                        break;
                    case 'clear':
                        terminalOutput.innerHTML = ''; return;
                    default:
                        responseLine.innerHTML = `<p class="text-red-400">[-] Logic fault. Instruction set unmapped. Try "help".</p>`;
                }
                terminalOutput.appendChild(responseLine);
                terminalBody.scrollTop = terminalBody.scrollHeight;
            }
        });
    }
    function escapeHtml(str) { return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
});
